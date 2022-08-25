import '@fontsource/jetbrains-mono/400.css'
import Layout from '../components/Layout'
import '../styles.css'

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
