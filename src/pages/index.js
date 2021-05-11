import React from "react"
import Layout from "../components/Layout"
import BackgroundCover from "../components/BackgroundCover";

// import "../styles/home.module.css"

export default function Home() {
  return (
    <section>
      <Layout>
        <BackgroundCover />
        <h3>Quisque est urna pharetra ultrices ?</h3>
        <p>Phasellus mollis, leo congue tincidunt aliquet, augue lacus tincidunt arcu, nec facilisis dui libero nec ipsum. Nullam ac ex sit amet dolor auctor molestie.</p>
        <p>Phasellus mollis, leo congue tincidunt aliquet, augue lacus tincidunt arcu, nec facilisis dui libero nec ipsum. Nullam ac ex sit amet dolor auctor molestie. Phasellus mollis, leo congue tincidunt aliquet, augue lacus tincidunt arcu, nec facilisis dui libero nec ipsum.</p>
        <p>Phasellus mollis, leo congue tincidunt aliquet, augue lacus tincidunt arcu, nec facilisis dui libero nec ipsum. Nullam ac ex sit amet dolor auctor molestie.</p>
      </Layout>
    </section>
  )
}
