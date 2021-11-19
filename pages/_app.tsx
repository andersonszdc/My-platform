import GlobalStyle from '../styles/global'
import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

function MyApp({ Component, pageProps }) {
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

  const Layout = Component.layout ? Component.layout : React.Fragment
  
  return (
    <>
    <GlobalStyle />
    <Elements stripe={stripePromise}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Elements>
    </>
  )
}

export default MyApp
