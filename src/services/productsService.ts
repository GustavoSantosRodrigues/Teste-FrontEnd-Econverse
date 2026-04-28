import type { Product, ProductsResponse } from '../types/product'

const PRODUCTS_API_URL = import.meta.env.VITE_PRODUCTS_API_URL

export async function getProducts(): Promise<Product[]> {
  if (!PRODUCTS_API_URL) {
    throw new Error('URL da API de produtos não configurada.')
  }

  const response = await fetch(PRODUCTS_API_URL)

  if (!response.ok) {
    throw new Error('Erro ao buscar produtos.')
  }

  const data: ProductsResponse = await response.json()

  if (!data.success || !Array.isArray(data.products)) {
    throw new Error('Resposta inválida da API de produtos.')
  }

  const validProducts = data.products.filter((product) => {
    return (
      product.productName &&
      product.descriptionShort &&
      product.photo &&
      typeof product.price === 'number'
    )
  })

  return validProducts
}