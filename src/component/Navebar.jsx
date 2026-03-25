import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContect";
import { useCart } from "../context/CartContext";
export default function Navebar() {
  const { user , logout } = useAuth();
  const { cartItems } = useCart();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-brand">Aadvik Parjapati</NavLink>
        <div className="navbar-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>Home</NavLink>
          {!user && <NavLink to="/auth" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>Auth</NavLink>}
          <NavLink to="/checkout" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>Cart
            {cartItems && <span className="cart-count">({cartItems ? cartItems.length : 0})</span>}
          </NavLink>
        </div>
        <div className="navbar-auth">
            <div className="navbar-auth-links">
              {user ? (
                <div className="welcome-message">
                  <span className="welcome-message">Welcome, {user.email}</span>
                  <NavLink onClick={logout}  className="btn btn-danger">Log Out</NavLink>
                </div>
              ) : (
                <>
                  <NavLink to="/auth" state={{ mode: "signin" }} className="btn btn-secondary">Login</NavLink>
                  <NavLink to="/auth" state={{ mode: "signup" }} className="btn btn-primary">Sign Up</NavLink>
                </>
              )}
            </div>
        </div>  
      </div>s
    </nav>
  )
}