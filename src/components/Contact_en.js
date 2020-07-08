import React from "react"
import Layout from "../components/Layout"

const contact = () => {
    return (
        <section id="contact" className="contact-page">
            <article className="contact-form">
                <h3> Contact us </h3>
                <h4>Fill the form and we will contact you</h4>
                <form action="https://formspree.io/xdowwllb" method="POST"  >
                    <div className="form-group">
                        <input type="text" placeholder="Name" name="name" className="form-control" />
                        <input type="email" placeholder="Email" name="email" className="form-control" />
                        <textarea name="message" rows="5" placeholder="Message" className="form-control"></textarea>
                    </div>
                    <button type="submit" className="submit-btn">
                        Send
            </button>
                </form>
            </article>
        </section>
    )
}

export default contact
