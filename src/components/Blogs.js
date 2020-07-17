import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import { Carousel } from "react-responsive-carousel";

export const Blogs = ({ articles, title }) => {

  return <section id="articles" className="article-page">
    <Title title={title} subtitle="Pesquisas que resultaram em artigos publicados pela nossa equipe" />

    <div className="section-center ">
      <Carousel showThumbs={false} showStatus={false}>
        {articles.map((article) => {
          return (
            <div>
              <Blog key={article.id} {...article.frontmatter} />
            </div>
          )
        })}
      </Carousel>
    </div>

  </section >
}
export default Blogs
