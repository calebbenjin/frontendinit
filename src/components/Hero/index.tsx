import React from 'react'
import Link from 'next/link'
import { HeroWrapper } from './HeroStyle'
import { SiJavascript, SiTypescript, SiCss3, SiHtml5, SiReact, SiAngular, SiWeb3Dotjs, SiSvelte } from 'react-icons/si'
import { IoLogoVue } from 'react-icons/io5'
import { MdReadMore } from 'react-icons/md'

const Hero = () => {
  return (
    <HeroWrapper>
      <div className="container">
        <div className="heroContent">
          <div className="wrapper">
            <div className="hero-title-top">Learn.Build.Connect.</div>
            <div className="hero-title-bottom" aria-hidden="true">Learn.Build.Connect.</div>
          </div>
          <div className="wrapper-mobile">
            <div className="hero-title-top">Learn.<br /> Build.<br />Connect.</div>
            <div className="hero-title-bottom" aria-hidden="true">Learn.<br /> Build.<br /> Connect.</div>
          </div>
          <p className="description">FrontendInit is the community for frontend developers, providing mentorship, roadmap, resources, hacktons, jobs, and inspiration that frontend developers need to kickstart their career.</p>
          <Link href="https://join.slack.com/t/frontendinit/shared_invite/zt-1kwe1jiq9-fUPLB54R_LxMLXkJr2XEog" className="heroBtn">Join the community</Link>
          <div className="hero-topic">
            <p className="sub-title">Topics we talk about</p>
            <div className="grid">
              <div className="iconWrapper">
                <SiHtml5 className="icon" />
                <p>HTML5</p>
              </div>
              <div className="iconWrapper">
                <SiCss3 className="icon" />
                <p>CSS3</p>
              </div>
              <div className="iconWrapper">
                <SiJavascript className="icon" />
                <p>JavaScript</p>
              </div>
              <div className="iconWrapper">
                <SiTypescript className="icon" />
                <p>TypeScript</p>
              </div>
              <div className="iconWrapper">
                <SiReact className="icon" />
                <p>React</p>
              </div>
              <div className="iconWrapper">
                <IoLogoVue className="icon" />
                <p>Vue</p>
              </div>
              <div className="iconWrapper">
                <SiWeb3Dotjs className="icon" />
                <p>Web3js</p>
              </div>
              <div className="iconWrapper">
                <p>Etherjs</p>
              </div>
              <div className="iconWrapper">
                <SiSvelte className="icon" />
                <p>Svelte</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroWrapper>
  )
}

export default Hero