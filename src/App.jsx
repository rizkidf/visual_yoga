import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Home from './pages/home'
import Order from './pages/order'
import DaftarModel from './pages/daftarModel'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/order' element={<Order />} />
        <Route path='/daftar-model' element={<DaftarModel />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
