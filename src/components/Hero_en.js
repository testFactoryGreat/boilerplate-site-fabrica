import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import seta from "../assets/setaservices.png"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"


const query = graphql`
{
  file(relativePath: {eq: "hero.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const Hero = () => {
  const { file: { childImageSharp: { fluid }, }, } = useStaticQuery(query);
  return <header className="hero">
    <div className="section-center hero-center">
      <article className="hero-info">
        <div>
          <h1>
            We test Web, Mobile and Ubiques applications with the <mark className="yellow" >best techniques</mark> of our area.
            </h1>
          <h4 className="btn">
            <a className="hero-services" href="#services">
              More about our services
            </a>
          </h4>
          <SocialLinks />
        </div>
      </article>
    </div>
  </header>
}

export default Hero
