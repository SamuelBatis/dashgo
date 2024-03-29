import { ChakraProvider } from '@chakra-ui/react'
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return(
    <ChakraProvider resetCSS={false} theme={theme} >
      <SidebarDrawerProvider>
      <Component {...pageProps} />
      </SidebarDrawerProvider >
     </ChakraProvider>
  )   
} 

export default MyApp
