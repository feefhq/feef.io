import Head from 'next/head'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Feef.io</title>
      </Head>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
