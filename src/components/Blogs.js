import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"
import Slider from "react-slick";

export const Blogs = ({ articles, title }) => {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };

  return <section id="articles" className="article-page">
    <Title title={title} subtitle="Pesquisas que resultaram em artigos publicados pela nossa equipe" />
    <Slider {...settings}>
      <div className="section-center blogs-center">
        {articles.map((article) => {
          return <Blog key={article.id} {...article} />
        })}
      </div>
    </Slider>
  </section>
}
export default Blogs
