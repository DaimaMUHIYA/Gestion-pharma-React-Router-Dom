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
import Layout from './components/Layout.jsx';

const router = createBrowserRouter(
  [
      {
          path: "/",
          element: <Login/>,
      },
      {
          path: "/",
          element: <Layout/>,
          children: [
              {
                  path: "/home",
                  element: <Home/>
              },
              {
                  path: "/about",
                  element: <About/>
              },
              {
                  path: "/products",
                  element: <Products/>,
                  children: [
                      {
                          path: "",
                          element: <ProductList/>
                      },
                      {
                          path: ":id",
                          element: <SingleProduct/>
                      }
                  ]
              }
          ]
      },
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
