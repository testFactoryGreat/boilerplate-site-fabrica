import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import imagesite from "../assets/hero.jpg"
import Image from "gatsby-image"
// ...GatsbyImageSharpFluid
const About = () => {
    return (
        <section id="about" className="about-page">
            <div className="section-center">
                <article className="about-text">
                    <h2>
                        O que é a <mark className="yellow" >Fábrica de Testes do GREat?</mark>
                    </h2>
                    <h3>
                        A Fábrica de Testes do GREat é composta de pesquisadores e profissionais certificados na área de Teste de Software, fornecendo serviços de testes alinhados às novidades em pesquisa e inovação. Vantagens da Fábrica de testes do GREat:
                    </h3>
                    <p>- Processo de testes baseado no <mark className="yellow" >MPS.BR </mark></p>
                    <p>- Uso de <mark className="yellow" >frameworks de automação de testes próprios</mark></p>
                    <p>- Profissionais <mark className="yellow" >qualificados com certificações e treinamentos</mark> regulares</p>
                    <p>- Participação de pesquisadores <mark className="yellow" >mestres e doutores</mark></p>
                    <p>- Independência dos testes, <mark className="yellow" >sem viés do desenvolvedor</mark></p>
                    <p>- Uso de <mark className="yellow" >padrões </mark> para report de bugs e para projetos de automação</p>
                    <p>- Pesquisa aplicada para geração de <mark className="yellow" >soluções inovadoras</mark></p>
                </article>
            </div>
        </section>
    )
}

export default About
