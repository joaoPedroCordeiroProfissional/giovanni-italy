import React from "react"

import { Container, Row, Col } from "react-bootstrap"
import * as styles from "../styles/footer.module.css"
import { Link } from "gatsby"

export default function Footer() {
  return (
    <Container className={styles.footer} fluid>
      <Row>
        <Col className={styles.textAling} md>
          <h3>Menu</h3>
          <p className={styles.paragraph}>
            <Link to="/">Home</Link>
          </p>
          <p className={styles.paragraph}>
            <Link to="/about">About</Link>
          </p>
          <p className={styles.paragraph}>
            <Link to="/">Rooms</Link>
          </p>
        </Col>
        <Col className={styles.textAling} md>
          <h3>Hours:</h3>
          <p className={styles.paragraph}>9:00am to 5:00pm</p>
        </Col>
        <Col className={styles.textAling} md>
          <h3>Contact Information</h3>
          <p className={styles.paragraph}>Basingstoke</p>
          <p className={styles.paragraph}>United Kingdom</p>
          <p className={styles.paragraph}>
            <a href="tel:+44 7472371528">Mobile Phone: +44 7472371528</a>
          </p>
          <p className={styles.paragraph}>
            <a href="tel:+44 1256 279532">Comercial Phone: +44 1256 279532</a>
          </p>
        </Col>
      </Row>
    </Container>
  )
}
