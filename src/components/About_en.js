import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title_en"
import imagesite from "../assets/hero.jpg"
import Image from "gatsby-image"
// ...GatsbyImageSharpFluid
const About = () => {
    return (
        <section id="about" className="about-page">
            <div className="section-center">
                <article className="about-text">
                    <h2>
                        What is the <mark className="yellow" >GREat Test Factory</mark>
                    </h2>
                    <h3>
                        The GREat Test Factory is made by researchers and certified professionals in Software Test area, providing test services aligned to what is new on research and inovation. Advantages of our services:
                    </h3>
                    <p>- Test proccess based on <mark className="yellow" >MPS.BR </mark></p>
                    <p>- Use of <mark className="yellow" >automation frameworks</mark></p>
                    <p>- <mark className="yellow" >Qualified professionals</mark> with certifications</p>
                    <p>- Researches participation <mark className="yellow" >of academics</mark></p>
                    <p>- Independent tests <mark className="yellow" >whithout dev team</mark></p>
                    <p>- Use of <mark className="yellow" >patterns </mark> to bug report and automation projects</p>
                    <p>- Research applied to <mark className="yellow" >inovate solutions</mark></p>
                </article>
            </div>
        </section>
    )
}

export default About
