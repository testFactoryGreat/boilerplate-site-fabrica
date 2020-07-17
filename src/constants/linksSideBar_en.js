import React from "react"
import { Link } from "gatsby"
const data = [
    {
        id: 1,
        text: "Home",
        url: "/index_en/",
    },
    {
        id: 2,
        text: "About",
        url: "/about_en/",
    },
    {
        id: 3,
        text: "Articles",
        url: "/blog/",
    },
    {
        id: 4,
        text: "Contact",
        url: "/contact_en/",
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
