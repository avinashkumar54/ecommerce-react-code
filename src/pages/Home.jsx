import { getProducts } from '../data/products'
import ProductDetails from '../component/ProductDetails'
export default function Home() {
    let product = getProducts()
  return (
    <div className="page">
        <div className="home-hero">
            <h1 className="home-title">Welcome to Aadvik Parjapati's Ecommerce Store</h1>
            <p className="home-subtitle">Discover the best products at unbeatable prices. Shop now and experience the difference!</p>
        </div>
        <div className="container">
            <h2 className="page-title">Our Products</h2>
            <div className="product-grid">
                {product.map((p) => (
                    <ProductDetails key={p.id} p={p} />
                ))}
            </div>
        </div>
    </div>
  )
}