import React from "react"
import Layout from "../components/Layout"
import BackgroundCover from "../components/BackgroundCover";

import { Container, Row, Col } from 'react-bootstrap';
import { StaticImage } from "gatsby-plugin-image";
import  Seo from '../components/Seo';

import * as styles from "../styles/home.module.css";

export default function Home() {
  return (
    <section>
      <Layout>
        <Seo title={Home} />
        <BackgroundCover />
        <Container fluid>
          <Row>
            <Col className={styles.textAling} md>
              <h2>Why keep looking when we can find you the best ?</h2>
            </Col>
          </Row>

          <Row>
            <Col className={styles.subtitle} md>
              <p>At GDF we do all the work and save your time & money</p>
            </Col>
          </Row>

          <Row className={styles.textAling}>
            <Col md>
              <StaticImage src="../images/shearchHouse.png" placeholder="blurred" alt="House Search" />
            </Col>
            <Col md>
              <p>
                We have a professional and expert team of real estate brokers,
                analysts and personal advisers that can ensure you the best deal in the city.
                We do all the seaching, visiting and negotiating the best opportunities that fit your needs.
                Making you choice much easer!
              </p>
            </Col>
            <Col md>
              <StaticImage src="../images/houseChoice.png" placeholder="blurred" alt="House Options" />

            </Col>
          </Row>

          <Row className={styles.contentRow}>
            <Col className={styles.contentA} md>
              <div>
                <h3>Why to keep looking ?</h3>

                <p>
                  At GDF we offer different types of accommodations that can vary form a simple sleep over room to a house or apartament rent.
                </p>
                  <p>
                  No more headaches when looking for a new home or planning a new trip we take care of everything for you!                  </p>
                  <p>
                  From our website or social media you can have access to all the available opportunities at the moment. 
                  If you're looking for something specific, don't worry, contact us right now so we'll find the best for you!
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
            <Col className={styles.contentB} md>
              <h3>The perfect match</h3>
              <p>
                Our team is engaged to find your perfect mach an downtown appartment, 
                a detached house in a great neighborhood or a more sophisticated suburbs house.
              </p>

              <p>
                We have a intuitive and sophisticated survey form that guides our team of 
                astonishing professional to find our dream home or perfect hotel room 99% of the time.
              </p>

              <p>
                Contact us to learn more about our business model and help you find your match!
              </p>
            </Col>
          </Row>

          <Row className={styles.contentRow}>
            <Col className={styles.contentC} md>
              <h3>Choosing the Right Candidate</h3>

              <p> 
                Once you've completed the form and sent it to us in a few days we'll have all the data and opportunities 
                covered for you. 
              </p>

              <p>
                So it's time to meet at our office or online to discuss all the properties that 
                out team discovered for you and present all the important informations and contracts specifications.
              </p>

              <p>
                Finally, you can decide the best match for you and GDF will arrange all the visitings and clarify any 
                doubts.
              </p>
            </Col>
            <Col md>
              <StaticImage src="../images/buildingImg.png" placeholder="blurred" alt="Building" />
            </Col>
          </Row>

          <Row className={styles.contentRow}>
            <Col className={styles.contentD} md>
              <h3>The happiest cene</h3>
              <p>
                Our goal to make your life better in a better place is so strong that you'll be enjoying your 
                renewed life along with your family in a few days after the first contact with our team.
              </p>

              <p>
                All that headache that you were costumed to when moving to a new home or booked a hotel, forget it. 
                That's the past, we're your future choice for a fast and high-quality real estate agency!
              </p>

              <p>
                Think happy, think safe, choose GDF.
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
