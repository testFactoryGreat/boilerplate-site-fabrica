import React from "react"
import { Link } from "gatsby"
const data = [
    {
        id: 1,
        text: "Início",
        url: "/",
    },
    {
        id: 2,
        text: "Sobre a Fábrica",
        url: "/about/",
    },
    {
        id: 3,
        text: "Artigos",
        url: "/blog/",
    },
    {
        id: 4,
        text: "Contato",
        url: "/contact/",
    },
]

const tempLinks = data.map(link => {
    if (link.text !== 'Contato2')
        return (
            <li key={link.id}>
                <Link to={link.url}>{link.text}</Link>
            </li>
        )
    else
        return (
            <button>
                <li key={link.id}>
                    <Link to={link.url}>{link.text}</Link>
                </li>
            </button>
        )
})

export default ({ styleClass }) => {
    return (
        <ul className={`page-links ${styleClass ? styleClass : ""}`}>
            {tempLinks}
        </ul>
    )
}
