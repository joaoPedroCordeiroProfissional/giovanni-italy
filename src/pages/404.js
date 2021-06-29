import React from "react"

import Layout from "../components/Layout";
import  Seo from '../components/Seo';

export default function NotFound() {
  return (
    <Layout>
      <Seo title={404} />
      <h2>404</h2>
      <p>Sorry, this page doesn't exist.</p>
    </Layout>
  )
}
