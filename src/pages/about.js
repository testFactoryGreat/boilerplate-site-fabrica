import React from "react"
import Layout from "../components/Layout"
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
              O que é a Fábrica de Testes do GREat?
            </h2>
            <h3>
              A Fábrica de Testes do GREat é composta de pesquisadores e profissionais certificados na área de Teste de Software, fornecendo serviços de testes alinhados às novidades em pesquisa e inovação. Vantagens da Fábrica de testes do GREat:
              <p></p>
              <p>- Processo de Testes baseado no ao MPS.BR</p>
              <p>- Uso de frameworks de automação de testes próprios</p>
              <p>- Profissionais Qualificados (certificações e treinamentos regulares)</p>
              <p>- Participação de Pesquisadores (Mestres e Doutores)</p>
              <p>- Independência dos testes ("sem viés do desenvolvedor")</p>
              <p>- Uso de padrões (reporte de bugs, automação)</p>
              <p>- Pesquisa Aplicada (geração de soluções inovadoras)</p>
            </h3>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default About
