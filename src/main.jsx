import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Login from './pages/login.jsx';
import Products from './pages/products.jsx';
import ProductList from './pages/productList.jsx';
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Login/>
  },
  {
    path:'/home',
    element: <>
        <div><h1>Accueil</h1></div>
    </>
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
            element: <h1>Single Product</h1>
        }
    ]
},{
    path:'/singleProduct',
    element: <>
        <div><h1>Produit</h1></div>
    </>
  },
  {
    path:'/about',
    element: <>
        <div><h1>A propos</h1></div>
    </>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
