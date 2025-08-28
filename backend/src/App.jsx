import React, { useContext } from 'react'
import Home from "./pages/Home";
import {Routes,Route, useLocation} from 'react-router-dom'
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';
import Cart from './pages/Cart'
import Navbar from './components/Navbar';
import Auth from './models/Auth';
import { AppContext } from './context/AppContext';
import MyOrder from './pages/MyOrder';
import ProductCategory from './pages/ProductCategory';
import Footer from './components/Footer';
import {Toaster} from 'react-hot-toast';
import AddAddress from './pages/AddAddress';
import SellerLogin from './components/seller/SellerLogin';
import SellerLayout from './pages/seller/SellerLayout'
import ProductList from './pages/seller/ProductList';
import AddProduct from './pages/seller/AddProduct';
import Orders from './pages/seller/Orders';


function App() {
  const {isSeller, showUserLogin}=useContext(AppContext);
  const isSellerPath=useLocation().pathname.includes("seller");
  return (
    <div className='text-default min-h-screen '>
     {isSellerPath?null:<Navbar/>}
      {showUserLogin?<Auth/>:null}
      <Toaster/>
     <div className='px-6 md:px-16 lg:px-24 xl:px-32' >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Products' element={<Products />}/>
         <Route path='/Products/:category' element={<ProductCategory />}/>
        <Route path='/Product/:category/:id' element={<ProductDetails />}/>
       
        <Route path='/cart' element={<Cart />}/>
        <Route path='/my-orders' element={<MyOrder />}/>
        <Route path='/add-address' element={<AddAddress />}/>


        <Route path='/seller' element={isSeller?<SellerLayout/>:<SellerLogin/>}>
         <Route index  element={isSeller?<AddProduct/>:null}/>
         <Route path='product-list'
          element={isSeller? <ProductList/>:null}
          />
          <Route path='orders'
          element={isSeller? <Orders/>:null}   />
        </Route>
      </Routes>
     </div>
     {isSellerPath?null:<Footer/>}
    </div>
  )
}

export default App;

