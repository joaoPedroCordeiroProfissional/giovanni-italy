import React from "react"

import "../styles/global.css"
import "bootstrap/dist/css/bootstrap.min.css"

import Header from "./Header"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <div className="content">{children}</div>
      <footer>
        <p>Copyright 2021 Web Warrior</p>
      </footer>
    </div>
  )
}
