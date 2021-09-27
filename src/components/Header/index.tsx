import React, { useMemo, useState } from 'react'

import FloatingCart from '../FloatingCart'

import { useCart } from '../../hooks/cart'

import { Container, Content } from './styles'

import corebizLogo from '../../assets/logo.svg'
import cartIcon from '../../assets/cart-icon.svg'
import menuIcon from '../../assets/menu-icon.svg'
import searchIcon from '../../assets/search-icon.svg'
import userIcon from '../../assets/user-icon.svg'

interface HeaderProps {
  search(q: string): void
}

const Header: React.FC<HeaderProps> = ({ search }) => {
  const [active, setIsActive] = useState(false)
  const { products } = useCart()

  const totalItensInCart = useMemo(() => {
    const total = products.reduce(
      (acumulator, { quantity }) => acumulator + quantity,
      0
    )

    return total
  }, [products])

  return (
    <>
      <Container>
        <Content>
          <div className="hamburger">
            <img src={menuIcon} />
          </div>

          <img src={corebizLogo} className="logo" />

          <button onClick={() => setIsActive(!active)} className="cart">
            <img src={cartIcon} />
            {products.length > 0 && <span>{totalItensInCart}</span>}
          </button>

          <div className="search">
            <input
              type="text"
              placeholder="O que está procurando?"
              onChange={e => search(e.target.value)}
            />
            <button>
              <img src={searchIcon} />
            </button>
          </div>

          <div className="user">
            <img src={userIcon} />
            Minha conta
          </div>
        </Content>
      </Container>
      <FloatingCart
        isActive={active}
        toggle={() => {
          setIsActive(!active)
        }}
      />
    </>
  )
}

export default Header
