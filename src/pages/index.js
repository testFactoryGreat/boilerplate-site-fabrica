import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import About from "../components/About"
import Contact from "../components/Contact"


export default ({ data }) => {
  const {
    allMarkdownRemark: {
      nodes: articles
    }
  } = data

  return (<Layout>
    <Hero />
    <Services />
    <About />
    <Blogs articles={articles} title="Artigos" />
    <Contact />
  </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          link
          title
          resume
          event
          date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        }
        id
      }
    }
  }
`