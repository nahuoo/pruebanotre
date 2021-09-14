import type { NextPage } from 'next'
import Head from 'next/head'
import { createClient } from 'contentful'
import { Navbar } from '../components/navbar'
import { Hero } from '../components/hero'
import { About } from '../components/about'
import { Footer } from '../components/footer'
import { Box } from '@chakra-ui/layout'
import { Form } from '../components/contact'
import { Hero2 } from '../components/prueba2'
import Blog from '../components/blog'
/*
export async function getStaticProps() {
  const client = createClient({
    space: 'ftv5t2jre3bg',
    accessToken: '4qNarz5C8ZqLGHZFXdvdsEe2OehC3fxp1Qnx_EfNKHI',
  })

  const res = await client.getEntries({ content_type: 'notre' })

  return {
    props: {
      content: res.items,
    },
  }
}
*/
const Home: NextPage = ({ content }: any) => {
  return (
    <div>
        <Head>
          <title>Notre Style</title>
          <meta name="description" content="Trajes de baño" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

      
        <Hero />
        <About />
        <Blog />
        <Form />
        <Footer />
    </div>
  )
}

export default Home
