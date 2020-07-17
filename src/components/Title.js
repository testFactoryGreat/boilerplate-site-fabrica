import React from "react"

const Title = ({ title, subtitle }) => {
  return <div className="section-title">
    <h2>
      {title || 'default title'}
    </h2>
    <h4>{subtitle}</h4>
  </div>
}

export default Title
