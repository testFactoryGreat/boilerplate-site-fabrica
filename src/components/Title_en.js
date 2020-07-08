import React from "react"

const Title = ({ title }) => {
  return <div className="section-title">
    <h2>
      {title || 'default title'}
    </h2>
    <h4>
      We act testing applications and user experience
    </h4>
  </div>
}

export default Title
