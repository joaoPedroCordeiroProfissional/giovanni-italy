import React from "react";

import * as styles from '../styles/header.module.css';
import { FiPhoneIncoming } from "@react-icons/all-files/fi/FiPhoneIncoming";
import { Navbar, Nav, Button } from 'react-bootstrap';

import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function Header() {

  return (
    <Navbar collapseOnSelect expand="md" variant="light" bg="white" sticky="top" className={styles}>
      <Navbar.Brand>
        <Link to="/">
          <StaticImage className={styles.logoImage} src="../images/logo.png" placeholder="blurred" alt="GDF Logo" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link></Nav.Link>
          <Nav.Link></Nav.Link>
        </Nav>
        <Nav>
        <Nav.Link><Link to="/">Home</Link></Nav.Link>
          <Nav.Link><Link to="/about">About</Link></Nav.Link>
          <Button variant="danger" size="md" className={styles.phone}><a href="tel:+44 7577 081227"><FiPhoneIncoming  className={styles.phoneIcon}/>+44 7577 081227</a></Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar >
  )
}
