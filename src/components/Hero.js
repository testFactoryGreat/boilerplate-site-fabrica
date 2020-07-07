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
          <h3>
            O QUE FAZEMOS?
            </h3>
          <h1>
            Testamos aplicações Web, Móveis e Úbiquas com as  <mark className="yellow" >melhores técnicas</mark> da atualidade.
            </h1>
          <h4 className="btn">
            <a className="hero-services" href="#services">
              CONHEÇA OS NOSSOS SERVIÇOS
            </a>
          </h4>
          <SocialLinks />
        </div>
      </article>
    </div>
  </header>
}

export default Hero
