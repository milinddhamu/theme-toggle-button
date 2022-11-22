import { Layout } from '../components/Layout'
import {ThemeProvider} from 'next-themes'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
    
  )
}

export default MyApp
