import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"

export default function Projects({ data }) {
  console.log(data)
  const projects = data.projects.nodes
  const copyright = data.contact.siteMetadata.copyright

  return (
    <Layout>
      <div>
        <h2>Porfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div>
          {projects.map(project => (
            <Link to={"/projects" + project.frontmatter.slug} key={project.id}>
              <div>
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Like what you see ? Emial me at {copyright} for a quote</p>
      </div>
    </Layout>
  )
}

// export page query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      nodes {
        frontmatter {
          title
          slug
          stack
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        copyright
      }
    }
  }
`
