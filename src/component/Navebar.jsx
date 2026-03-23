import { NavLink } from "react-router-dom";

export default function Navebar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-brand">Aadvik Parjapati</NavLink>
        <div className="navbar-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>Home</NavLink>
          <NavLink to="/auth" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>Auth</NavLink>
          <NavLink to="/checkout" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>Checkout</NavLink>
        </div>
        <div className="navbar-auth">
            <div className="navbar-auth-links">
                <NavLink to="/auth" className="btn btn-secondary">Login</NavLink>
                <NavLink to="/auth" className="btn btn-primary">Login</NavLink>
            </div>
        </div>
      </div>
    </nav>
  )
}