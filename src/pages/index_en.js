import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout_en"
import Hero from "../components/Hero_en"
import Services from "../components/Services_en"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import About from "../components/About_en"
import Contact from "../components/Contact_en"
export default () => {
  return <Layout>
    <Hero />
    <Services />
    <About />
    <Contact />
  </Layout>
}
// ...GatsbyImageSharpFluid
