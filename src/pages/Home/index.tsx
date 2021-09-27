import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'

import { useCart } from '../../hooks/cart'
import api from '../../services/api'
import formatValue from '../../utils/formatValue'

import starFullIcon from '../../assets/starfull-icon.svg'
import starEmptyIcon from '../../assets/starempty-icon.svg'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Newsletter from '../../components/Newsletter'
import Footer from '../../components/Footer'

import { Container, Content } from './styles'

interface Installment {
  quantity: number
  value: number
}

interface Product {
  productId: number
  productName: string
  stars: number
  imageUrl: string
  listPrice?: number
  price: number
  installments: Installment[]
  quantity?: number
}

const Home: React.FC = () => {
  const [search, setSearch] = useState('')
  const { addToCart } = useCart()
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products')

      setProducts(response.data)
    }

    loadProducts()
  }, [products])

  function handleAddToCart(item: Product): void {
    addToCart(item)
  }

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  }

  return (
    <Container>
      <Header search={setSearch} />
      <Banner />

      <Content>
        {search === '' ? (
          <h1>Mais vendidos</h1>
        ) : (
          <h1>Resultados da busca: {search}</h1>
        )}
        <Slider {...settings} className="products">
          {products.map(product => (
            <div className="product" key={product.productId}>
              {product.listPrice && <div className="off">OFF</div>}

              <img src={product.imageUrl} alt={product.productName} />

              <div className="product-content">
                <h1>{product.productName}</h1>

                <div className="rating">
                  {Array.from({ length: 5 }, (_, index) => index + 1).map(
                    item => (
                      <img
                        src={
                          item <= product.stars ? starFullIcon : starEmptyIcon
                        }
                        key={item}
                      />
                    )
                  )}
                </div>

                <span className="listPrice">
                  {product.listPrice ? (
                    `de ${formatValue(product.listPrice)}`
                  ) : (
                    <br />
                  )}
                </span>

                <span className="price">por {formatValue(product.price)}</span>

                {product.installments.map(installment => (
                  <span
                    className="installments"
                    key={installment.quantity + ''}
                  >
                    ou em {installment.quantity}x de{' '}
                    {formatValue(installment.value)}
                  </span>
                ))}

                {product.installments.length === 0 && (
                  <span className="installments">
                    <br />
                  </span>
                )}

                <button
                  onClick={() => handleAddToCart({ ...product, quantity: 1 })}
                >
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </Slider>

        <Newsletter />

        <Footer />
      </Content>
    </Container>
  )
}

export default Home
