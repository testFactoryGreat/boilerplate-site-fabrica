import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return (
    <Layout>
      <section className="contact-page">
        <article className="contact-form">
          <h3> Entre em contato </h3>
          <form action="https://formspree.io/xdowwllb" method="POST"  >
            <div className="form-group">
              <input type="text" placeholder="Nome" name="name" className="form-control" />
              <input type="email" placeholder="Email" name="email" className="form-control" />
              <textarea name="message" rows="5" placeholder="Mensagem" className="form-control"></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              Enviar
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
