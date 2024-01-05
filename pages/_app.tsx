import { Box, ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider>
        <NavBar />
        <Box mt={20} />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </>
  )
}
