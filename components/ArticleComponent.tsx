import React from "react";

interface Post {
  title: string;
  content: string;
  bloglink: string;
  source: "hashnode" | "starknet";
}

// StarkNet.io work articles — static, shown as "Featured work"
const starknetArticles: Post[] = [
  {
    title: "Develop a dApp with StarkNet.js",
    content: "Step-by-step guide to building decentralized applications on StarkNet using the StarkNet.js SDK.",
    bloglink: "https://www.starknet.io/blog/develop-dapp-starknet-js/",
    source: "starknet",
  },
  {
    title: "On-Chain Gaming on StarkNet with Dojo",
    content: "Exploring game development on StarkNet using the Dojo framework — the fully on-chain game engine.",
    bloglink: "https://www.starknet.io/blog/on-chain-gaming-starknet-dojo/",
    source: "starknet",
  },
  {
    title: "Paymaster: The Secret to Making dApps Feel Like Web2",
    content: "How Account Abstraction's paymaster feature enables sponsored, gasless transactions for end users.",
    bloglink: "https://www.starknet.io/blog/paymaster-the-secret-to-making-dapps-feel-like-web2/",
    source: "starknet",
  },
  {
    title: "Cartridge Controller: Smooth UX for On-Chain Games",
    content: "Deep dive into Cartridge Controller and how it removes friction for players in on-chain games.",
    bloglink: "https://www.starknet.io/blog/cartridge-controller-lets-talk-about-smooth-ux-for-onchain-games/",
    source: "starknet",
  },
  {
    title: "Session Keys on StarkNet: Unlocking Gasless Transactions",
    content: "Implementing session keys for secure, seamless, and gas-free interactions on StarkNet.",
    bloglink: "https://www.starknet.io/blog/session-keys-on-starknet-unlocking-gasless-secure-transactions/",
    source: "starknet",
  },
];

// Fallback posts if Hashnode fetch fails
const hashnodeFallback: Post[] = [
  {
    title: "Mastering Chain Abstraction: How to Simplify Multi-Chain Interactions",
    content: "Simplifying multi-chain interactions for developers and end users.",
    bloglink: "https://reet.hashnode.dev/mastering-chain-abstraction-how-to-simplify-multi-chain-interactions",
    source: "hashnode",
  },
  {
    title: "Understanding ZK-SNARKS vs. ZK-STARKS",
    content: "Key differences between ZK-SNARKs and ZK-STARKs in privacy, security, and scalability.",
    bloglink: "https://reet.hashnode.dev/understadning-zk-snarks-vs-zk-starks",
    source: "hashnode",
  },
  {
    title: "Step-by-step: Cairo Development on Windows for StarkNet",
    content: "Setting up a full Cairo development environment on Windows for StarkNet development.",
    bloglink: "https://reet.hashnode.dev/step-by-step-setting-up-cairo-development-on-windows-for-starknet",
    source: "hashnode",
  },
  {
    title: "Beyond the Price Tag: Bitcoin's Untapped Development Ecosystem",
    content: "Exploring the overlooked developer tools and infrastructure being built on and around Bitcoin.",
    bloglink: "https://reet.hashnode.dev/beyond-the-price-tag-bitcoins-untapped-development-ecosystem",
    source: "hashnode",
  },
];

async function getHashnodePosts(): Promise<Post[]> {
  try {
    const res = await fetch("https://gql.hashnode.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
          query {
            publication(host: "reet.hashnode.dev") {
              posts(first: 8) {
                edges {
                  node {
                    title
                    brief
                    url
                  }
                }
              }
            }
          }
        `,
      }),
      next: { revalidate: 3600 },
    });

    const json = await res.json();
    const edges = json?.data?.publication?.posts?.edges ?? [];

    return edges.map((e: { node: { title: string; brief: string; url: string } }) => ({
      title: e.node.title,
      content: e.node.brief,
      bloglink: e.node.url,
      source: "hashnode" as const,
    }));
  } catch {
    return hashnodeFallback;
  }
}

const SourceBadge: React.FC<{ source: "hashnode" | "starknet" }> = ({ source }) => {
  if (source === "starknet") {
    return (
      <span className='inline-flex items-center gap-1.5 text-[9px] uppercase tracking-widest font-semibold text-purple-400 border border-purple-900/60 px-2 py-0.5 rounded-full'>
        StarkNet
      </span>
    );
  }
  return (
    <span className='inline-flex items-center gap-1.5 text-[9px] uppercase tracking-widest font-semibold text-emerald-400 border border-emerald-900/60 px-2 py-0.5 rounded-full'>
      Hashnode
    </span>
  );
};

const ArticleComponent = async () => {
  const hashnodePosts = await getHashnodePosts();

  return (
    <div className='articles-bg w-full py-20 px-6 sm:px-12 md:px-16 lg:px-28 xl:px-36'>

      {/* Section label */}
      <div className='flex items-center gap-3 mb-5'>
        <span className='w-6 h-px bg-emerald-500' />
        <span className='text-emerald-400 tracking-[0.3em] text-[10px] uppercase font-semibold'>
          03 / Writing
        </span>
      </div>

      <h1 className='tracking-tight text-white text-4xl lg:text-5xl font-bold mb-12'>
        Articles &amp; writing
      </h1>

      {/* StarkNet work articles */}
      <p className='text-gray-600 text-xs uppercase tracking-[0.2em] font-medium mb-4'>
        Featured work
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12'>
        {starknetArticles.map((article, index) => (
          <ArticleCard key={index} article={article} index={index} />
        ))}
      </div>

      {/* Hashnode blog — auto-updates */}
      <p className='text-gray-600 text-xs uppercase tracking-[0.2em] font-medium mb-4'>
        From my blog · auto-updated
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {hashnodePosts.map((article, index) => (
          <ArticleCard key={index} article={article} index={index + starknetArticles.length} />
        ))}
      </div>
    </div>
  );
};

const ArticleCard: React.FC<{ article: Post; index: number }> = ({ article, index }) => (
  <div
    className='border border-slate-800 hover:border-emerald-900 bg-slate-900/30 hover:bg-slate-900/60 rounded-2xl px-6 py-5 flex flex-col justify-between gap-4 transition-all duration-300'
    data-aos='fade-up'
    data-aos-delay={`${(index % 6) * 60}`}>
    <div>
      <div className='mb-3'>
        <SourceBadge source={article.source} />
      </div>
      <h2 className='text-white font-semibold text-sm leading-snug'>
        {article.title}
      </h2>
      <p className='mt-2.5 text-gray-500 text-xs leading-relaxed line-clamp-2'>
        {article.content}
      </p>
    </div>
    <a
      href={article.bloglink}
      target='_blank'
      rel='noopener noreferrer'
      className='inline-flex w-fit rounded-full border border-emerald-800 text-emerald-400 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 px-4 py-1.5 text-[10px] font-semibold tracking-wider transition-all duration-300'>
      Read →
    </a>
  </div>
);

export default ArticleComponent;
