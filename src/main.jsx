import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Login from "./pages/Login.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ProductsList from './pages/productList.jsx';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Login/>
    },

    {
      path: "/singleproduct",
      element: <div><h1>Produit</h1></div>
    },

    {
      path: "/products",
      element: <Products/>,

      children: [
        {
          path: "",
          element: <ProductsList/>
        },

        {
          path:":id",
          element: <SingleProduct/>
        }
      ]
    },

    {
      path: "/home",
      element: <div><h1>Accueil</h1></div>
    },

    {
      path: "/about",
      element: <div><h1>A propos</h1></div>
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
