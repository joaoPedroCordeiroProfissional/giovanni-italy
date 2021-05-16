import React from "react"
import Layout from "../components/Layout"
import BackgroundCover from "../components/BackgroundCover";

import { Container, Row, Col } from 'react-bootstrap';
import { StaticImage } from "gatsby-plugin-image";

import * as styles from "../styles/home.module.css";

export default function Home() {
  return (
    <section>
      <Layout>
        <BackgroundCover />
        <Container fluid>
          <Row>
            <Col className={styles.textAling} md>
              <h3>Quisque est urna pharetra ultrices ?</h3>
            </Col>
          </Row>

          <Row>
            <Col className={styles.textAling} md>
              <p>Phasellus mollis, leo congue tincidunt aliquet, augue lacus tincidunt arcu, nec facilisis dui libero nec ipsum. Nullam ac ex sit amet dolor auctor molestie.</p>
            </Col>
          </Row>

          <Row className={styles.textAling}>
            <Col md>
              <StaticImage src="../images/shearchHouse.png" placeholder="blurred" alt="House Search" />
            </Col>
            <Col md><p>Phasellus mollis, leo congue tincidunt aliquet, augue lacus tincidunt arcu, nec facilisis dui libero nec ipsum. Nullam ac ex sit amet dolor auctor molestie. Phasellus mollis, leo congue tincidunt aliquet, augue lacus tincidunt arcu, nec facilisis dui libero nec ipsum. Phasellus mollis, leo congue tincidunt aliquet, augue lacus tincidunt arcu, nec facilisis dui libero nec ipsum. Nullam ac ex sit amet dolor auctor molestie.</p>
            </Col>
            <Col md>
              <StaticImage src="../images/houseChoice.png" placeholder="blurred" alt="House Options" />

            </Col>
          </Row>

          <Row className={styles.lastPItem} md>
            <Col>
              <p>Phasellus mollis, leo congue tincidunt aliquet, augue lacus tincidunt arcu, nec facilisis dui libero nec ipsum. Nullam ac ex sit amet dolor auctor molestie.</p>
            </Col>
          </Row>

          <Row className={styles.contentRow}>
            <Col className={styles.contentA} md>
              <div>
                <h3>Why to keep looking ?</h3>

                <p>
                  At GDF, We offer different types of accommodations that can vary form a simple sleep over room to a house or apartament rent.
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tellus ipsum, pharetra non bibendum at, volutpat non diam.
                  Integer eget blandit ante, ac posuere turpis.
                  <br />
                  Duis at nisl lobortis, placerat libero ut, tempor justo.
                  Suspendisse consequat dolor arcu, nec accumsan odio mollis at.
                </p>
              </div>
            </Col>
            <Col md>
              <StaticImage src="../images/searchPhone.png" placeholder="blurred" alt="Searching Houses on a phone" />
            </Col>
            <Col className={styles.bgColor} md></Col>
          </Row>

          <Row className={styles.contentRow}>
            <Col md>
              <StaticImage src="../images/homeImg.png" placeholder="blurred" alt="Home" />
            </Col>
            <Col md>
              <h3>Neque porro quisquam est </h3>
              <p>
                Duis sodales leo vitae elit dignissim, quis hendrerit magna bibendum. Ut libero nisl, fringilla ac rhoncus eu, aliquet non erat.
                Morbi in tincidunt ipsum.
              </p>

              <p>
                In pulvinar, tellus sed posuere sagittis, nisi ligula fermentum nisl, pulvinar consequat lorem sem eget diam.
              </p>

              <p>
                Pellentesque nec orci interdum, porttitor nisl finibus, dignissim erat.
                Aliquam hendrerit pellentesque ipsum, pretium
              </p>

              <p>
                accumsan lorem rhoncus sit amet. Ut hendrerit tellus eget elit dignissim cursus
              </p>
            </Col>
          </Row>

          <Row className={styles.contentRow}>
            <Col className={styles.contentB} md>
              <h3>Neque porro quisquam est </h3>

              <p>
                Integer et augue neque. In id libero vitae arcu imperdiet molestie vitae ut est. Etiam a lectus consequat, sagittis magna id, finibus enim.
              </p>

              <p>
                Mauris at lacus dignissim, consequat neque porttitor, aliquam neque. Nam ut mollis augue.
              </p>

              <p>
                Phasellus mollis, leo congue tincidunt aliquet, augue lacus tincidunt arcu, nec facilisis dui libero nec ipsum.
              </p>
            </Col>
            <Col md>
              <StaticImage src="../images/buildingImg.png" placeholder="blurred" alt="Building" />
            </Col>
          </Row>

          <Row className={styles.contentRow}>
            <Col md>
              <h3>Quisque efficitur mauris eu </h3>
              <p>
                In hac habitasse platea dictumst. Sed sem justo, luctus nec eros eu, interdum volutpat ante.

                Proin pharetra tortor ipsum, sit amet varius ante ullamcorper a. In in tempus tortor, at interdum erat.
              <br />

              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

              <br />

              Donec interdum odio vitae nunc volutpat sodales. Vestibulum ante ipsum primis in faucibus orci luctus
              et ultrices posuere cubilia curae; Fusce ac euismod nisl.
              <br />
              Donec vel ligula ac eros consequat scelerisque quis non tellus. Phasellus vitae tempus odio.
            </p>
            </Col>

            <Col md>
              <StaticImage src="../images/suburbs.png" placeholder="blurred" alt="Suburbs" />
            </Col>
          </Row>

        </Container>
      </Layout>
    </section>
  )
}
