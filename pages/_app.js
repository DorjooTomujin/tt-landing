
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../src/theme'
// import '../src/styles/globals.css'
import Layout from '../src/components/layout'
import Head from 'next/head'
import '../src/style.css'
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout>
        
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
