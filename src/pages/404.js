import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <SEO />
      <main className="error-page">
        <div className="error-container">
          <h1>
            Página inexistente!
     </h1>
          <Link to='/' className="btn">
            Página Inicial
     </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
