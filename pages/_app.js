import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import theme from "../src/theme";
// import '../src/styles/globals.css'
import { Navbar } from "../src/components/header";
import Layout from "../src/components/layout";
import "../src/style.css";
function MyApp({ Component, pageProps }) {
     const { isOpen, onOpen, onClose } = useDisclosure();

     return (
          <ChakraProvider resetCSS theme={theme}>
               <Navbar isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
               <Layout>
                    <Component {...pageProps} />
               </Layout>
          </ChakraProvider>
     );
}

export default MyApp;
