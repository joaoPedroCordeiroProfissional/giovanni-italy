import React from "react";

import CarouselComponent from "../components/Carousel";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";

import { Container, Row, Col } from 'react-bootstrap';
import * as styles from "../styles/about.module.css";

export default function About() {
  return (
    <Layout>
      <Helmet>
        {/* Primary Meta Tags */}
          <meta charSet="utf-8" />
          <title>GDF Housing - About</title>
          <link rel="canonical" href="https://www.gdfhousing.com" />
          <meta name="title" content="GDF Housing - Rental Solutions" />
          <meta name="description" content="Your trustworthy real estate agent is right here!" />

          {/* Open Graph / Facebook  */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.gdfhousing.com" />
          <meta property="og:title" content="GDF Housing - Rental Solutions" />
          <meta property="og:description" content="Your trustworthy real estate agent is right here!" />
          <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
        </Helmet>

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
            <StaticImage src="../images/buildingCartoon.png" height={351} width={379} placeholder="blurred" alt="Building" />
          </Col>
        </Row>

        <Row>
          <Col className={styles.textAlignUp} md><h1>More than you can imagine</h1></Col>
        </Row>

        <Row>
          <Col className={styles.textAlign} md><p>More for your comfort</p></Col>
        </Row>


        <Row className={styles.contentRow}>
          <Col xl={6} md>
            <StaticImage src="../images/terracedHouses.jpeg" placeholder="blurred" alt="Terraced Houses" />
          </Col>
          <Col className={styles.contentA} xl={6} md>
            <div className={styles.contentDiv}>
              <h4 className={styles.contentTitleA}>The best choice for :</h4>
              <h2>Workers</h2>
              <h2>Part-time workers</h2>
              <h2>Students</h2>
              <h2>Holidays</h2>
            </div>
          </Col>
        </Row>

        <Row className={styles.buttonRow}>
          <a href="https://wa.me/+447577081227?text=I'd%20like%20in%20to%20get%20a%20room!" target="_blank" rel="noreferrer">
            <button className={styles.firstBtn}>Contact us</button>
          </a>
        </Row>

        <Row className={styles.contentRow}>
          <Col className={styles.contentB} md>
            <div className={styles.contentDivB}>
              <h1>Semi-Detached Houses</h1>
              <p>
                Can offer a good compromise between affordability and autonomy. You will have a party wall with just one neighbour, but depending on when the house was built and to what design, you may have a substantial amount of living space for your money and even a decent area of garden.
              </p>
            </div>
          </Col>

          <Col md>
            <StaticImage src="../images/semiDHouse.jpeg" placeholder="blurred" alt="Terraced Houses" />
          </Col>
        </Row>

        <Row className={styles.buttonRow}>
        <a href="https://wa.me/+447577081227?text=I'd%20like%20in%20to%20get%20a%20room!" target="_blank" rel="noreferrer">
          <button className={styles.secondBtn}>Contact us</button>
        </a>
        </Row>


        <Row className={styles.carouselRow}>
          <Col className={styles.dottedLineDiv} lg={3} md>
            <hr className={styles.dottedLine} />
          </Col>
          <Col lg={6} md>
            <div className={styles.carouselTitle}>
              <h1>The Accomodation You Need</h1>
            </div>
          </Col>
          <Col className={styles.dottedLineDiv} lg={3} md>
            <hr className={styles.dottedLine} />
          </Col>
        </Row>
      </Container>
        <CarouselComponent />
    </Layout>
  )
}
