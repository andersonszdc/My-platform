import GlobalStyle from '../styles/global'
import React from 'react'

function MyApp({ Component, pageProps }) {
  const Layout = Component.layout ? Component.layout : React.Fragment
  
  return (
    <>
    <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
