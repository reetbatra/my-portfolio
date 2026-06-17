"use client";
import React, { useEffect } from "react";
import "aos/dist/aos.css";

interface Article {
  title: string;
  content: string;
  bloglink: string;
}

const topArticles: Article[] = [
  {
    title: "Mastering Chain Abstraction: How to Simplify Multi-Chain Interactions",
    content:
      "Demystifying Chain Abstraction: Simplifying Interactions Across Multiple Blockchains for Beginners",
    bloglink:
      "https://reet.hashnode.dev/mastering-chain-abstraction-how-to-simplify-multi-chain-interactions",
  },
  {
    title: "Understanding ZK-SNARKS vs. ZK-STARKS",
    content:
      "Deciphering the Key Differences Between ZK-SNARKs and ZK-STARKs: Enhancing Privacy, Security, and Scalability in the Blockchain Ecosystem",
    bloglink: "https://reet.hashnode.dev/understadning-zk-snarks-vs-zk-starks",
  },
  {
    title: "A beginners guide on How to build and publish your own NPM package",
    content: "Level Up Your Dev Skills: Build and Publish an npx Package Today!",
    bloglink:
      "https://reet.hashnode.dev/a-beginners-guide-on-how-to-build-and-publish-your-own-npm-package",
  },
  {
    title: "A guide to Account Abstraction & BUILDing a dApp with Biconomy",
    content: "Leveraging Biconomy's SDK for developing dApps that anyone can use",
    bloglink:
      "https://reet.hashnode.dev/a-guide-to-account-abstraction-building-a-dapp-with-biconomy",
  },
  {
    title: "Mina Protocol Uncovered: Developing Your Own zkApp",
    content: "A Hands-On Journey into Mina's Blockchain and Zero-Knowledge App Development",
    bloglink: "https://reet.hashnode.dev/mina-protocol-uncovered-developing-your-own-zkapp",
  },
  {
    title: "A beginners' guide to zero-knowledge proofs.",
    content: "Unlocking the Power and Potential of Zero-Knowledge Proofs",
    bloglink: "https://reet.hashnode.dev/a-beginners-guide-to-zero-knowledge-proofs",
  },
];

const ArticleComponent: React.FC = () => {
  useEffect(() => {
    const AOS = require("aos");
    AOS.init({ once: true, duration: 500 });
  }, []);

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
        Top articles
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8'>
        {topArticles.map((article, index) => (
          <div
            key={index}
            className='border border-slate-800 hover:border-emerald-900 bg-slate-900/30 hover:bg-slate-900/60 rounded-2xl px-7 py-6 flex flex-col justify-between gap-4 transition-all duration-300'
            data-aos='fade-up'
            data-aos-delay={`${index * 80}`}>
            <div>
              <h2 className='text-white font-semibold text-base leading-snug'>
                {article.title}
              </h2>
              <p className='mt-3 text-gray-500 text-sm leading-relaxed'>
                {article.content}
              </p>
            </div>
            <a
              href={article.bloglink}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex w-fit rounded-full border border-emerald-800 text-emerald-400 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 px-5 py-2 text-xs font-semibold tracking-wider transition-all duration-300'>
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleComponent;
