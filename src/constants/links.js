import React from "react"
import { Link } from "gatsby"
import usa from "../assets/usa.png"
const data = [
  {
    id: 1,
    text: "Início",
    url: "/",
  },
  {
    id: 2,
    text: "Sobre a Fábrica",
    url: "#about",
  },
  {
    id: 3,
    text: "Artigos",
    url: "#articles",
  },
  {
    id: 4,
    text: "Contato",
    url: "#contact",
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
      <a href="/index_en/">
        <img src={usa} alt="usa" width="43" height="30" />
      </a>
      {/* <button className="btn-language">English</button> */}
    </ul>
  )
}
