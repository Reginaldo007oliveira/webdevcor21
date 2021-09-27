import React from 'react'

import logo from '../../assets/logo-white.svg'
import vtexLogo from '../../assets/vtex-logo.svg'
import mailIcon from '../../assets/mail-icon.svg'
import callIcon from '../../assets/call-icon.svg'

import { Container } from './styles'

const Footer: React.FC = () => {
  return (
    <Container>
      <div className="wrap">
        <div className="place">
          <h1>Localização</h1>
          <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
          <p>Alphavile SP</p>
          <p>brasil@corebiz.ag</p>
          <p>+55 11 3090 1039</p>
        </div>

        <div className="contact">
          <button>
            <img src={mailIcon} />
            <span>Entre em contato</span>
          </button>
          <button>
            <img src={callIcon} />
            <span>Fale com o nosso consultor online</span>
          </button>
        </div>

        <div className="credits">
          <div>
            <span>Created by</span>
            <img src={logo} />
          </div>

          <div>
            <span>Powered by</span>
            <img src={vtexLogo} />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Footer
