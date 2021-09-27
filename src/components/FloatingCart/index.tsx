import React, { useMemo } from 'react'

import { useCart } from '../../hooks/cart'
import formatValue from '../../utils/formatValue'

import { FiPlus, FiMinus, FiX } from 'react-icons/fi'

import { Container } from './styles'

interface FloatingCartProps {
  isActive: boolean
  toggle(): void
}

const FloatingCart: React.FC<FloatingCartProps> = ({ isActive, toggle }) => {
  const { increment, decrement, products, removeFromCart } = useCart()

  function handleIncrement(id: number): void {
    increment(id)
  }

  function handleDecrement(id: number): void {
    decrement(id)
  }
  const cartTotal = useMemo(() => {
    const total = products.reduce(
      (acumulator, { price, quantity }) => acumulator + price * quantity,
      0
    )

    return formatValue(total)
  }, [products])

  const totalItensInCart = useMemo(() => {
    const total = products.reduce(
      (acumulator, { quantity }) => acumulator + quantity,
      0
    )

    return total
  }, [products])

  return (
    <Container className={totalItensInCart > 0 && isActive ? 'opened' : ''}>
      <header>
        <h1>Meu carrinho ({totalItensInCart} items)</h1>
        <button onClick={toggle}>
          <FiX />
        </button>
      </header>
      {products.map(product => (
        <div className="product" key={product.productId}>
          <img src={product.imageUrl} alt={product.productName} />

          <div className="content">
            <div>
              <h1>{product.productName}</h1>
              <p>{formatValue(product.price)}</p>
            </div>

            <button onClick={() => removeFromCart(product.productId)}>
              remover
            </button>
          </div>

          <div className="actions">
            <button onClick={() => handleIncrement(product.productId)}>
              <FiPlus />
            </button>
            {product.quantity}
            <button
              onClick={() => handleDecrement(product.productId)}
              disabled={product.quantity === 1}
            >
              <FiMinus />
            </button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total</span>
        <h1>{cartTotal}</h1>
      </div>
    </Container>
  )
}

export default FloatingCart
