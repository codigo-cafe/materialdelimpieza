import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
// import components
import Menu from './components/Menu'
import Qr from './components/Qr'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <div className='App bg-gray-100'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>
        <Menu />
        <Qr />
        <Sidebar />
        <Footer />
      </Router>
    </div>
  )
}

export default App
