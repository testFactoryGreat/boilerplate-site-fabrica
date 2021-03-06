import React from "react"
import Layout from "../components/Layout"

const contact = () => {
    return (
        <section id="contact" className="contact-page">
            <article className="contact-form">
                <h3> Entre em contato </h3>
                <h4>Preencha o formulário de contato e o nosso time irá entrar em contato com você</h4>
                <form action="https://formspree.io/xdowwllb" method="POST"  >
                    <div className="form-group">
                        <input type="text" placeholder="Nome" name="name" className="form-control" />
                        <input type="email" placeholder="Email" name="email" className="form-control" />
                        <textarea name="message" rows="5" placeholder="Mensagem" className="form-control"></textarea>
                    </div>
                    <button type="submit" className="submit-btn">
                        Enviar
            </button>
                </form>
            </article>
        </section>
    )
}

export default contact
