import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {ProductDetailContainer} from '../ProductDetailContainer/ProductDetailContainer'
import {NotFoundPage} from '../NotFoundPage/NotFoundPage'
import { ProductsListContainer } from '../ProductsListContainer/ProductsListContainer'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { HomePage } from '../HomePage/HomePage'
import { CheckOut } from '../CheckOut/CheckOut'
import ScrollTop from '../ScrollTop/ScrollTop'




const Routing = () => {
  return (
    <div>
        <BrowserRouter>
            <Header/>
            <ScrollTop/>
            <Routes>
                <Route path='/' element= {<HomePage/>}/>
                <Route path='/home' element={<HomePage/>}/>
                <Route path='/shop' element={<ProductsListContainer/>}/>
                <Route path='/:brand/:categoryId' element={<ProductsListContainer/>}/>
                <Route path='/:brand' element={<ProductsListContainer/>}/>
                <Route path='/product/:itemId' element={<ProductDetailContainer/>}/>
                <Route path='/checkout' element={<CheckOut/>}/>
                <Route path='*' element= {<NotFoundPage/>}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    </div>
  )
}

export default Routing