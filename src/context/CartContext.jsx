/* eslint-disable react-refresh/only-export-components */
import { createContext , useState, useContext} from 'react';


const CartContext = createContext();
export default function CartProvider({ children }) {
   const [cartItems, setCartItems] = useState([]);

   function addToCart(product) {
        setCartItems(cartItems => {
            const existingItem = cartItems.find(
                item => item.product.id === product.id
            );

            if (existingItem) {
                return cartItems.map(item =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...cartItems, { product, quantity: 1 }];
        });
    }

    function removeFromCart(productId) {
            setCartItems((cartItems) => cartItems.filter(item => item.product.id !== productId));
            alert("Item removed from cart!");   
    }

    function updateQuantity(productId, quantity) {
        if (quantity <= 0) {
            removeFromCart(productId);
            return;
        }
        setCartItems(
            cartItems.map((item) =>
                item.product.id === productId ? { ...item, quantity } : item
            )
        );
    }

    function getCartTotal() {
        const total = cartItems.reduce((total, item) => {
        return total + (item.product ? item.product.price * item.quantity : 0);
        }, 0);
        return total;
    }

    function clearCart() {
        setCartItems([]);
    }

    return (
        <CartContext.Provider value ={{ cartItems, addToCart, removeFromCart, getCartTotal, clearCart, updateQuantity }}>
        {children}
        </CartContext.Provider>
    )
}

export function useCart() {
  const context = useContext(CartContext);

  return context;
}
