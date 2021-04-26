import React from "react"
import Layout from "../components/Layout"
import "../styles/home.module.css"

export default function Home() {
  return (
    <section>
      <Layout>
        <div>
          <h1>
            Example heading <span className="badge bg-secondary">New</span>
          </h1>
          <button type="button" className="btn btn-primary">
            Notifications <span className="badge bg-secondary">4</span>
          </button>
          <h2 className="text-bold">Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Ux Design & Web Development</p>
          <a href="https://api.whatsapp.com/send?phone=447446157840">
            whatsapp
          </a>
        </div>
      </Layout>
    </section>
  )
}
