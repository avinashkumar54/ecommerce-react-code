import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function ProductDetails({ p }) {
  const { addToCart } = useCart();
  return (
    <div key={p.id} className="product-card">
        <img src={p.image} alt={p.name} className='product-card-image'/>
        <div className='product-card-content'>
            <h3 className="product-card-name">{p.name}</h3>
            <p className="product-card-price">${p.price.toFixed(2)}</p>
            <p className="product-detail-description">{p.description}</p>
            <div className="product-card-actions">
                <button className="btn btn-primary" onClick={()=> addToCart(p)}>Add to Cart</button>
                <Link className="btn btn-secondary" to={`/products/${p.id}`}>
                    View Details
                </Link>
            </div>
        </div>
    </div>                    
  )
}