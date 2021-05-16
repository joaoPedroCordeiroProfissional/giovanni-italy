import React from "react"

import "../styles/global.css"
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css"

import Header from "./Header"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <div className="content">{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
