
import { ChakraProvider, useDisclosure } from '@chakra-ui/react'
import theme from '../src/theme'
// import '../src/styles/globals.css'
import Layout from '../src/components/layout'
import Head from 'next/head'
import '../src/style.css'
import { Navbar } from '../src/components/header'
import { useEffect, useRef, useState } from 'react'
function MyApp({ Component, pageProps }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [width, setWidth] = useState(1000)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    setWidth(globalThis.screen.width)
    setLoading(false)
  }, [])

  return (
    <ChakraProvider resetCSS theme={theme}>
        <Navbar isOpen={isOpen} onOpen={onOpen} onClose={onClose} w={width}  l={loading}/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
