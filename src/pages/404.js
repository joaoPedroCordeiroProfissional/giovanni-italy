import React from "react"

import Layout from "../components/Layout";
// import  Seo from '../components/Seo';
import { Helmet } from "react-helmet";

export default function NotFound() {
  return (
    <Layout>
      <Helmet>
          <meta charSet="utf-8" />
          <title>GDF Housing - About us</title>
          <link rel="canonical" href="https://www.gdfhousing.com/about" />
          <meta name="title" content="GDF Housing - Rental Solutions" />
          <meta name="description" content="Your trustworthy real estate agent is right here!" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.gdfhousing.com" />
          <meta property="og:title" content="GDF Housing - Rental Solutions" />
          <meta property="og:description" content="Your trustworthy real estate agent is right here!" />
          <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
        </Helmet>
      <h2>404</h2>
      <p>Sorry, this page doesn't exist.</p>
    </Layout>
  )
}
