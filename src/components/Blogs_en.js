import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import { Carousel } from "react-responsive-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const Blogs = ({ articles, title }) => {

  const settings = {
    dots: true,
    arrows: true,
    slidesToShow: 3,
    infinite: false,
    speed: 500,
    rows: 1,
    slidesPerRow: 1,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          rows: 1,
          slidesPerRow: 1,
          slidesToScroll: 1
        }
      }
    ],
  };

  return <section id="articles" className="article-page">
    <Title title={title} subtitle="Articles written by our team and published in conferences" />

    <div className="section-center ">
      <Slider {...settings}>
        {articles.map((article) => (
          <div>
            <Blog key={article.id} {...article.frontmatter} />
          </div>
        ))}
      </Slider>
    </div>

  </section >
}
export default Blogs
