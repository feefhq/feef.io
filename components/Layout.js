import Head from 'next/head'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Feef.io</title>
        <meta
          content='The feef.io website will be starting soon.'
          name='description'
        />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
