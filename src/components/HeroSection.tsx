/* This example requires Tailwind CSS v3.0+ */
import Navbar from './Navbar';
import { FiTwitter } from 'react-icons/fi';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';
import bottomImg from '@/public/bottombg.png';
import topRightImg from '@/public/DecoreTopRight.png';
import { motion as m } from 'framer-motion';

export default function HeroSection() {
  return (
    <div className="isolate bg-white">
      <Image
        src={topRightImg}
        className="absolute top-0 right-0"
        alt="heroimg"
        width={500}
        height={500}
      />
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
      <Navbar />
      <main>
        <div className="relative h-auto sm:pt-20 flex items-center justify-center px-6 lg:px-8">
          <Image
            src={bottomImg}
            className="fixed bottom-0 left-0"
            alt="heroimg"
            width={500}
            height={500}
          />
          <div className="mx-auto max-w-7xl pt-20 pb-32 sm:pt-30 sm:pb-20">
            {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center max-w-4xl mx-auto text-center">
                <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  <span className="text-gray-600">
                    Hello there! Welcome to this page! As you can see, we&apos;re in
                    the early stages of development right now and we don&apos;t even
                    have a proper website yet, <b>so you&apos;re going to become a
                    pioneer if you choose to join FrontendInit today!</b>
                  </span>
                </div>
                </div> */}
            <div className="overflow-hidden">
              <m.h1
                animate={{ y: 0 }}
                initial={{ y: '100%' }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold tracking-tight sm:text-center sm:text-8xl"
              >
                The Frontend Engineer Growth Community
              </m.h1>
              <m.p
                animate={{ y: 0 }}
                initial={{ y: '100%' }}
                transition={{ duration: 0.7 }}
                className="my-6 sm:text-2xl sm:mx-40 text-lg leading-8 text-gray-600 sm:text-center"
              >
                Join amazing Frontend Developers helping each other learn and
                build in a thriving community.
              </m.p>
              {/* <p className="my-6 sm:text-2xl sm:mx-40 text-lg leading-8 text-gray-600 sm:text-center">
                  Join a fast growing frontend developer community, A community build for frontend developers to  save you time and grow fast in your career.
                </p> */}
              <m.div
                animate={{ y: 0 }}
                initial={{ y: '100%' }}
                transition={{ duration: 0.9 }}
                className="mt-8 flex gap-x-4 sm:justify-center"
              >
                <Link
                  href="https://discord.gg/CsmuqGkQeg"
                  className="inline-block shadow-lg rounded-lg bg-gray-900 px-6 py-4 text-base font-semibold leading-7 text-white shadow-lg"
                >
                  JION OUR DISCORD CHANNEL
                </Link>
              </m.div>
              {/* <div className="flex items-center sm:w-60 mx-auto justify-around mt-20">
                    <FiTwitter className="h-8 w-8" />
                    <BsLinkedin className="h-8 w-8" />
                    <BsGithub className="h-8 w-8" />
                </div> */}
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
              <svg
                className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                viewBox="0 0 1155 678"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                  fillOpacity=".3"
                  d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                />
                <defs>
                  <linearGradient
                    id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
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
          </div>
        </div>
      </main>
    </div>
  );
}
