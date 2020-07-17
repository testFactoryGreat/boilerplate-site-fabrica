import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout_en"
import Hero from "../components/Hero_en"
import Services from "../components/Services_en"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs_en"
import About from "../components/About_en"
import Contact from "../components/Contact_en"


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
    <Blogs articles={articles} title="Articles" />
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
