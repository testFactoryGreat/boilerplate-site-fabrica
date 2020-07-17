import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"
import Slider from "react-slick";

export const Blogs = ({ articles, title }) => {

  return <section id="articles" className="article-page">
    <Title title={title} subtitle="Pesquisas que resultaram em artigos publicados pela nossa equipe" />
    <div className="section-center blogs-center">
      {articles.map((article) => {
        return <Blog key={article.id} {...article.frontmatter} />
      })}
    </div>
  </section>
}
export default Blogs
