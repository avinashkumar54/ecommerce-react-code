/* eslint-disable react-hooks/set-state-in-effect */
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductById } from "../data/products"; // Replace with your actual data fetching logic
import { useCart } from "../context/CartContext";

export default function ProductsDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    // Fetch product details based on the ID from the URL
    const fetchProductDetails = getProductById(id); // Replace with your actual data fetching logic
    console.log(fetchProductDetails);
    setProduct(fetchProductDetails);
    if(!fetchProductDetails) {
      // Handle case where product is not found (e.g., show an error message or redirect)
      navigate('/'); // Redirect to home page if product is not found
      return;
    }
  }, [id, navigate]);

  return (
    <div className="page">
      <div className="container">
        <div className="product-detail">
          <div className="product-detail-image">
            {product && <img src={product.image} alt={product.name} />}
          </div>
          <div className="product-detail-content">
            {product && (
              <>
                <h2 className="product-detail-name">{product.name}</h2>
                <p className="product-detail-description">{product.description}</p>
                <p className="product-detail-price">Price: ${product.price.toFixed(2)}</p>
                <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}