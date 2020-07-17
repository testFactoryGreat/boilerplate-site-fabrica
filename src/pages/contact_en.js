import React from "react"
import Layout from "../components/Layout_en"
import SEO from "../components/SEO"


const contact = () => {
  return (
    <Layout>
      <SEO />
      <section className="contact-page">
        <article className="contact-form">
          <h3> Contact us </h3>
          <form action="https://formspree.io/xdowwllb" method="POST"  >
            <div className="form-group">
              <input type="text" placeholder="Nome" name="name" className="form-control" />
              <input type="email" placeholder="Email" name="email" className="form-control" />
              <textarea name="message" rows="5" placeholder="message" className="form-control"></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              Send
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
