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
            Page not found!
     </h1>
          <Link to='/' className="btn">
            Home Page
     </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
