import React from "react";

// import styles from '../styles/navbar.module.css';
import { Navbar, Nav } from 'react-bootstrap';

import { Link, graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function Header() {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // const { title } = data.site.siteMetadata

  return (
    <Navbar collapseOnSelect expand="lg" variant="light" bg="white">
      <Navbar.Brand href="#home"><StaticImage src="../images/logo.png" placeholder="blurred"
        layout="fixed"
        width={102}
        height={102} alt="Logo" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
      </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
// export const query = graphql`
//   query Logo {
//     file(relativePath: { eq: "logo.png" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `
