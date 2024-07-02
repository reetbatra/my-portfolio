"use client";
import React, { useEffect, useRef, useState } from "react";
import "aos/dist/aos.css";
import WAVES from "vanta/src/vanta.waves";
import * as THREE from "three";

interface Article {
  title: string;
  content: string;
  bloglink: string;
}

const topArticles: Article[] = [
  {
    title: "Dive deeper: Polygon's zkEVM",
    content:
      "Breaking down the complexities: Everything you need to know about Polygon's zkEVM and its significance.",
    bloglink:
      "https://reet.hashnode.dev/dive-deeper-polygons-zkevm",
  },
  {
    title: "A beginners guide on How to build and publish your own NPM package",
    content:
      "Level Up Your Dev Skills: Build and Publish an npx Package Today!",
    bloglink: "https://reet.hashnode.dev/a-beginners-guide-on-how-to-build-and-publish-your-own-npm-package",
  },
  {
    title: "A guide to Account Abstraction & BUILDing a dApp with Biconomy",
    content:
      "Leveraging Biconomy's SDK for developing dApps that anyone can use",
    bloglink:
      "https://reet.hashnode.dev/a-guide-to-account-abstraction-building-a-dapp-with-biconomy",
  },
  {
    title: "Mina Protocol Uncovered: Developing Your Own zkApp",
    content:
      "A Hands-On Journey into Mina's Blockchain and Zero-Knowledge App Development",
    bloglink:
      "https://reet.hashnode.dev/mina-protocol-uncovered-developing-your-own-zkapp",
  },
  // Add more articles as needed
];

const ArticleComponent: React.FC = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: vantaRef.current,
          THREE: THREE,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x421469,
          shininess: 10.0,
          waveHeight: 25.0,
          waveSpeed: 1.3,
          zoom: 1.75,
        })
      );
    }
  }, [vantaEffect]);

  useEffect(() => {
    const AOS = require("aos");
    AOS.init();
  }, []);

  return (
    <div
      className='top-articles bg-slate-950 w-full min-h-screen flex flex-col items-center justify-center'
      ref={vantaRef}
    >
      <h1 className='tracking-wider text-white text-4xl lg:text-5xl font-bold mb-4 mt-12'>
        Top Articles
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 mt-12 mb-32 mx-10 xl:mx-32'>
        {topArticles.map((article, index) => (
          <div
            key={index}
            className=' bg-white px-6 lg:px-8 xl:px-12 py-6 rounded-xl flex flex-col items-start justify-between'
            data-aos='fade-up'
            data-aos-delay={`${index * 100}`}
          >
            <h2 className='tracking-wider text-purple-500 font-bold text-xl lg:text-2xl'>
              {article.title}
            </h2>
            <p className='tracking-wider mt-4 text-black text-md'>{article.content}</p>

            <a
              href={article.bloglink}
              target='_blank'
              rel='noopener noreferrer'
              className='block tracking-wider border-purple-500 border-2 rounded-lg font-bold text-purple-500 hover:text-white px-4 py-2 mt-4 text-sm  lg:text-md transition-all duration-300 ease-in-out hover:bg-purple-500 focus:outline-none focus:ring focus:border-purple-900'
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleComponent;
