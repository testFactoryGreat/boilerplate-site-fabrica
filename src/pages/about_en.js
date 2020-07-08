import React from "react"
import Layout from "../components/Layout_en"
import { graphql } from "gatsby"
import Title from "../components/Title"
import imagesite from "../assets/hero.jpg"
import Image from "gatsby-image"
// ...GatsbyImageSharpFluid
const About = () => {
  return (
    <Layout>
      <section className="about-page">
        <div className="section-center">
          <article className="about-text">
            <h2>
              What GREat Test Factory is?
            </h2>
            <h3>
              The GREat Test Factory is made by researchers and certified professionals in Software Tests area, providing test services according to the best and new practices. Advantages of GREat Test Factory:
              <p></p>
              <p>- Test Process based on MPS.BR</p>
              <p>- Use test automation frameworks developed by ourself</p>
              <p>- Certified professionals</p>
              <p>- Research environment with academic participation</p>
              <p>- Independent tests (without dev team) </p>
              <p>- Use of patterns (reports, bugs)</p>
              <p>- Search from innovation solutions</p>
            </h3>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default About
