import type { NextPage } from 'next'
import Head from 'next/head'
import { Hero, Navbar, Ourvalues } from '../components'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Frontendinit</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Hero />
        {/* <Ourvalues /> */}
      </main>
    </div>
  )
}

export default Home
