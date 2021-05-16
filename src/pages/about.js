import React from "react";

import { Container, Row, Col } from 'react-bootstrap';
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "../styles/about.module.css";
import Layout from "../components/Layout"

export default function About() {
  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col md className={styles.backgroundFigure}>
            <div className={styles.titleDiv}>
              <h1>The Best Accomodations You Can Find in the City</h1>
            </div>
          </Col>
          <Col></Col>
        </Row>

        <Row className={styles.outDiv}>
          <Col md></Col>
          <Col md>
            <StaticImage src="../images/buildingCartoon.png" height={351} width={379} placeholder="blurred" alt="Building " />
          </Col>
        </Row>

        <Row>
          <Col className={styles.textAlingUp} md><h3>More than you can imagine</h3></Col>
        </Row>

        <Row>
          <Col className={styles.textAling} md><p>More for your comfort</p></Col>
        </Row>
      </Container>
    </Layout>
  )
}
