import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect
} from 'react'

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
  quantity: number
}

interface ICartContext {
  products: Product[]
  addToCart(item: Omit<Product, 'quantity'>): void
  increment(id: number): void
  decrement(id: number): void
  removeFromCart(id: number): void
}

const CartContext = createContext<ICartContext | null>(null)

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const storagedProducts = localStorage.getItem('@corebiz:products')

      if (storagedProducts) {
        setProducts(JSON.parse(storagedProducts))
      }
    }

    loadProducts()
  }, [])

  const addToCart = useCallback(
    async product => {
      const arrProducts = products
      const findProduct = arrProducts.find(
        p => p.productId === product.productId
      )

      if (findProduct) {
        findProduct.quantity += 1
        setProducts([...arrProducts])
      } else {
        setProducts([...products, { ...product, quantity: 1 }])
      }

      localStorage.setItem('@corebiz:products', JSON.stringify(products))
    },
    [products]
  )

  const increment = useCallback(
    async id => {
      const arrProducts = products
      const findProduct = arrProducts.find(p => p.productId === id)

      if (findProduct) {
        findProduct.quantity += 1
        setProducts([...arrProducts])
      }

      localStorage.setItem('@corebiz:products', JSON.stringify(products))
    },
    [products]
  )

  const decrement = useCallback(
    async id => {
      const arrProducts = products
      const findProduct = arrProducts.find(p => p.productId === id)
      const indexProduct = arrProducts.findIndex(p => p.productId === id)

      if (findProduct) {
        if (findProduct.quantity === 1) {
          arrProducts.splice(indexProduct, 1)
        } else {
          findProduct.quantity -= 1
        }
      }

      setProducts([...arrProducts])

      localStorage.setItem('@corebiz:products', JSON.stringify(products))
    },
    [products]
  )

  const removeFromCart = useCallback(
    async id => {
      const productsArray = products
      const productIndex = productsArray.findIndex(p => p.productId === id)

      productsArray.splice(productIndex, 1)

      setProducts([...productsArray])

      localStorage.setItem('@corebiz:products', JSON.stringify(products))
    },
    [products]
  )

  const value = React.useMemo(
    () => ({ addToCart, increment, decrement, products, removeFromCart }),
    [products, addToCart, increment, decrement, removeFromCart]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

function useCart(): ICartContext {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}

export { CartProvider, useCart }
