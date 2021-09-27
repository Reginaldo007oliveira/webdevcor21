import React from 'react'

import { Container } from './styles'

import banner from '../../assets/banner.jpg'

const Banner: React.FC = () => {
  return (
    <Container>
      <img src={banner} />

      <div className="heading">
        <h2>Olá, o que você está buscando?</h2>
        <h1>Criar ou migrar seu e-commerce?</h1>
      </div>

      <div className="dots">
        <span className="active" />
        <span />
        <span />
        <span />
      </div>
    </Container>
  )
}

export default Banner
