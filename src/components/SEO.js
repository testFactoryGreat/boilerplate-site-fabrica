import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        description
        siteUrl
        title
      }
    }
  }
`

const SEO = ({ }) => {
  const { site } = useStaticQuery(query);
  const { author, description, siteUrl, title } = site.siteMetadata
  return <Helmet htmlAttributes={{ lang: "pt-br" }} title={`${title}`}>
    <meta name="description" content={`${description}`} />
  </Helmet>
}

export default SEO
