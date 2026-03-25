import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Checkout from './pages/Chekout'
import Navebar from './component/Navebar'
import AuthProvider from './context/AuthContect'
import ProductsDetails from './pages/ProductsDetails'
import CartProvider from './context/CartContext'

function App() {


  return (
    <AuthProvider>
      <CartProvider>
        <div className="app">
          <Navebar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/auth' element={<Auth />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/products/:id' element={<ProductsDetails />} />
          </Routes>
        </div>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
