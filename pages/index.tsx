import type { NextPage } from 'next'
import Head from 'next/head'
import { createClient } from 'contentful'
import { Navbar } from '../components/navbar'
import { Hero } from '../components/hero'
import { About } from '../components/about'
import { Footer } from '../components/footer'
import { Box } from '@chakra-ui/layout'
import { Form } from '../components/contact'
export async function getStaticProps() {
  const client = createClient({
    space: 'ftv5t2jre3bg',
    accessToken: '4qNarz5C8ZqLGHZFXdvdsEe2OehC3fxp1Qnx_EfNKHI',
  })

  const res = await client.getEntries({ content_type: '0749' })

  return {
    props: {
      content: res.items,
    },
  }
}

const Home: NextPage = ({ content }: any) => {
  console.log(content[0].fields.fotos[1].fields.title)
  return (
    <div>
      <Box
        backgroundImage={
          'url(https://images.ctfassets.net/ftv5t2jre3bg/3bdByODlc3nJSdG0EDjiLb/2e51d223709f00b8e2a92de76b25a2dd/_SEA6581S.jpg)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center bottom'}
        backgroundAttachment={'fixed'}
      >
        <Head>
          <title>0749 || Producciones</title>
          <meta name="description" content="0749 producciones" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />
        <Hero />
        <About films={content[0].fields.fotos} />
        <Form />
        <Footer />
      </Box>
    </div>
  )
}

export default Home
