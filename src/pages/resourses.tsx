import React from 'react';
import { Navbar } from '../components';
import { easeOut, motion as m } from 'framer-motion';

const freeResourceData = [
  {
    id: 1,
    title: 'DEVELOPMENT TOOLS',
    info: [
      {
        icon: 'icon',
        title: 'Visual Studio Code',
        text: 'The best text editor in the world. See next resource for my current setup.',
        url: 'https://code.visualstudio.com/',
      },
      {
        icon: 'icon',
        title: 'My Visual Studio Code Setup',
        text: 'Check out exactly what theme, extensions and settings I currently use in VSCode.',
        url: 'https://github.com/jonasschmedtmann/html-css-course/blob/master/vscode-setup.md',
      },
      {
        icon: 'icon',
        title: 'Codepen',
        text: 'Codepen is an essential tool to quickly test out ideas. I use it in multiple courses too.',
        url: 'https://codepen.io/',
      },
      {
        icon: 'icon',
        title: 'Emmet Cheat Sheet',
        text: 'Emmet is an essential tool for writing HTML. I teach it in my advanced CSS course. This is a very handy cheat sheet to get started.',
        url: 'https://docs.emmet.io/cheat-sheet/',
      },
    ],
  },
  {
    id: 2,
    title: 'HTML5 RESOURCES',
    info: [
      {
        icon: 'icon',
        title: 'HTML5 Reference by MDN',
        text: "You don't need to know every HTML element. I just use this excellent reference all the time.",
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element',
      },
      {
        icon: 'icon',
        title: 'HTML Entity Reference by CSS-Tricks',
        text: 'Super useful reference, gives you HTML entity name, numeric code, hex code and ISO code.',
        url: 'https://css-tricks.com/snippets/html/glyphs/',
      },
    ],
  },
  {
    id: 2,
    title: 'FREE CSS RESOURCES',
    info: [
      {
        icon: 'icon',
        title: 'CSS3 Reference by MDN',
        text: "As with HTML, you don't need to know every CSS property. Use this reference instead.",
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Reference',
      },
      {
        icon: 'icon',
        title: 'HTML Entity Reference by CSS-Tricks',
        text: 'Super useful reference, gives you HTML entity name, numeric code, hex code and ISO code.',
        url: 'https://css-tricks.com/snippets/html/glyphs/',
      },
    ],
  },
];

const ResourcesPage = () => {
  return (
    <div className="isolate bg-white">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <m.main
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 0.76, easings: easeOut }}
        exit={{ opacity: 1 }}
      >
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                  Resources Coming Soon!! 🥰😎
                </h1>
              </div>
            </div>
          </div>
        </div>
      </m.main>
    </div>
  );
};

export default ResourcesPage;
