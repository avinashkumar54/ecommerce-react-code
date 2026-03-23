import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Checkout from './pages/Chekout'
import Navebar from './component/Navebar'


function App() {

  return (
    <div className="app">
      <Navebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </div>
  )
}

export default App
