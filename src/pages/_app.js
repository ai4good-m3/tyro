import React from 'react';
import '../styles/index.css';
import '../styles/Home.css';
import Layout from '../components/Layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp