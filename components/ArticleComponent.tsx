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
    AOS.init();
  }, []);

  return (
    <div className='articles-bg top-articles w-full min-h-screen flex flex-col items-center justify-center'>
      <h1 className='tracking-wider text-white text-4xl lg:text-5xl font-bold mb-4 mt-12'>
        Top Articles
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 mb-32 mx-6 sm:mx-10 xl:mx-32'>
        {topArticles.map((article, index) => (
          <div
            key={index}
            className='bg-white px-6 lg:px-8 xl:px-10 py-6 rounded-xl flex flex-col items-start justify-between'
            data-aos='fade-up'
            data-aos-delay={`${index * 100}`}>
            <h2 className='tracking-wider text-purple-600 font-bold text-xl lg:text-2xl'>
              {article.title}
            </h2>
            <p className='tracking-wider mt-4 text-black text-sm leading-relaxed'>
              {article.content}
            </p>
            <a
              href={article.bloglink}
              target='_blank'
              rel='noopener noreferrer'
              className='block tracking-wider border-purple-500 border-2 rounded-lg font-bold text-purple-500 hover:text-white px-4 py-2 mt-4 text-sm transition-all duration-300 ease-in-out hover:bg-purple-500 focus:outline-none focus:ring focus:border-purple-900'>
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleComponent;
