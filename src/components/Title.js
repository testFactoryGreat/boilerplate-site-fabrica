import React from "react"

const Title = ({ title }) => {
  return <div className="section-title">
    <h2>
      {title || 'default title'}
    </h2>
    <h4>Atuamos testando aplicações e avaliando a experiência do usuário</h4>
  </div>
}

export default Title
