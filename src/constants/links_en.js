import React from "react"
import { Link } from "gatsby"
import brasil from "../assets/brasil.png"
const data = [
  {
    id: 1,
    text: "Home",
    url: "/",
  },
  {
    id: 2,
    text: "About",
    url: "#about",
  },
  {
    id: 3,
    text: "Articles",
    url: "#articles",
  },
  {
    id: 4,
    text: "Contact",
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
      <a href="/">
        <img src={brasil} alt="brasil" width="43" height="30" />
      </a>
    </ul>
  )
}
