import React from 'react';

import {Container, Row, Col} from "react-bootstrap";
import * as styles from "../styles/footer.module.css";

export default function Footer() {
  return (
      <Container className={styles.footer} fluid>
        <Row>
          <Col className={styles.textAling} md>
            <h3>Menu</h3>
            <p className={styles.paragraph}>Home</p>
            <p className={styles.paragraph}>Rooms</p>
            <p className={styles.paragraph}>Contact</p>
          </Col>
          <Col className={styles.textAling} md>
            <h3>Hours:</h3>
            <p className={styles.paragraph}>9:00am to 5:00pm</p>
          </Col>
          <Col className={styles.textAling} md>
            <h3>Contact Information</h3>
            <p className={styles.paragraph}>Basingstoke</p>
            <p className={styles.paragraph}>United Kingdom</p>
            <p className={styles.paragraph}>Mobile Phone: +44 7447 157840</p>
            <p className={styles.paragraph}>Landline: 01256279387</p>
          </Col>
        </Row>
      </Container>
  )
}
