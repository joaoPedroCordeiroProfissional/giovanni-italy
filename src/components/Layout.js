import React from "react"

import { Helmet } from "react-helmet"
import Header from "./Header"
import Footer from "./Footer";

import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/global.css"

export default function Layout({ children }) {
  return (
    <div>
      <Helmet>
        {/* Primary Meta Tags */}
          <meta charSet="utf-8" />
          <title>GDF Housing - Rental Solutions</title>
          <link rel="canonical" href="https://www.gdfhousing.com" />
          <meta name="title" content="GDF Housing - Rental Solutions" />
          <meta name="description" content="Your trustworthy real estate agent is right here!" />

          {/* Open Graph / Facebook 
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.gdfhousing.com" />
          <meta property="og:title" content="GDF Housing - Rental Solutions" />
          <meta property="og:description" content="Your trustworthy real estate agent is right here!" />
          <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" /> */}
        </Helmet>
      <Header />
      <div className="content">{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
