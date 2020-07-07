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
                        O que é a Fábrica de Testes do GREat?
                    </h2>
                    <h3>
                        A Fábrica de Testes do GREat é composta de pesquisadores e profissionais certificados na área de Teste de Software, fornecendo serviços de testes alinhados às novidades em pesquisa e inovação. Vantagens da Fábrica de testes do GREat:
                        <p>- Processo de testes baseado no MPS.BR</p>
                        <p>- Uso de frameworks de automação de testes próprios</p>
                        <p>- Profissionais qualificados com certificações e treinamentos regulares</p>
                        <p>- Participação de pesquisadores mestres e doutores</p>
                        <p>- Independência dos testes, sem viés do desenvolvedor</p>
                        <p>- Uso de padrões para report de bugs e para projetos de automação</p>
                        <p>- Pesquisa aplicada para geração de soluções inovadoras</p>
                    </h3>
                </article>
            </div>
        </section>
    )
}

export default About
