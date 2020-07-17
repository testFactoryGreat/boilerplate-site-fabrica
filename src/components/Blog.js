import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
const Blog = ({ id, event, resume, title, date, link }) => {
  return (
    <a target="_blank" href={link} className="blog" key={id}>
      <article>
        <div className="blog-card">
          <h4>{title}</h4>
          <p>{resume}</p>
          <div className="blog-footer">
            <p>{event}</p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </a>
  )
}

Blog.propTypes = {}

export default Blog
