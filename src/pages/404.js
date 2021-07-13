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
          <meta name="google-site-verification" content="ApHzkWs3rsYhB3qeqxh4W0l5GVvnvxhblQed1H-rEC0" />
          <meta name="title" content="GDF Housing - Rental Solutions" />
          <meta name="description" content="Your trustworthy real estate agent is right here!" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.gdfhousing.com" />
          <meta property="og:title" content="GDF Housing - Rental Solutions" />
          <meta property="og:description" content="Your trustworthy real estate agent is right here!" />
          <meta property="og:image" content="https://res.cloudinary.com/jpimages/image/upload/v1626134976/Logo_wcymyd.png" />
        </Helmet>
      <h2>404</h2>
      <p>Sorry, this page doesn't exist.</p>
    </Layout>
  )
}
