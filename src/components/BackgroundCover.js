import React from "react"

import Jumbotron from "react-bootstrap/Jumbotron"
import { Button } from "react-bootstrap"
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp"

import * as styles from "../styles/jumbotron.module.css"

export default function BackgroundCover() {
  return (
    <div className={styles.overlay}>
      <Jumbotron className={styles.bgImg} fluid>
        <div className={styles.hero}>
          <h1>Here yours Needs are fulfilled</h1>
          <p>The best accommodations you can find</p>
          <div className={styles.buttonDiv}>
            <Button
              href="https://wa.me/+447472371528?text=I'd%20like%20in%20to%20get%20a%20room!"
              target="_blank"
              rel="noreferrer"
              className={styles.button}
              variant="danger"
              size="lg"
            >
              Contac us via <FaWhatsapp />
            </Button>
          </div>
        </div>
      </Jumbotron>
    </div>
  )
}
