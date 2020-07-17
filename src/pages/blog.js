import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
// ...GatsbyImageSharpFluid

export default ({ data }) => {
  const {
    allMarkdownRemark: {
      nodes: articles
    }
  } = data
  return (
    <Layout>
      <Blogs articles={articles} title="Artigos" />
    </Layout>)
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

