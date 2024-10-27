import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './component/Header/Header'
import Login from "./pages/Login/Login"
import SignUp from "./pages/SignUp/SignUp"
import PrivateComponent from './component/PrivateComponent/PrivateComponent'
import AppContext from './component/Context/AppContext'
import Cart from './pages/Cart/Cart'
import Checkout from './pages/Checkout/Checkout'
import Favourite from './pages/Favourite/Favourite'
function App() {

  return (

    <>
      <AppContext>

        {
          true ?
            <Header />
            :
            ""
        }

        <Routes>

          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/' element={<Home />} />

          <Route element={<PrivateComponent />}>
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/checkout' element={<Checkout />} />
            <Route exact path='/favourite' element={<Favourite />} />
          </Route>

          <Route path='*' element={<Home />} />

        </Routes>

      </AppContext>
    </>
  )
}

export default App
