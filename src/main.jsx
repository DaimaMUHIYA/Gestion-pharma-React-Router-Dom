import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Login from './pages/login.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home.jsx';
import SingleProduct from './pages/SingleProduct.jsx';
import About from './pages/About.jsx';
import Products from './pages/products.jsx';
import ProductList from './pages/productList.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Login/>
  },
  {
    path:'/home',
    element: <Home/>
  },
  {
    path: "/products",
    element: <Products/>,
    children:[
        {
            path:"",
            element: <ProductList/>
        },
        {
            path:":id",
            element: <SingleProduct/>
        }
    ]
},
  {
    path:'/about',
    element: <About/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
