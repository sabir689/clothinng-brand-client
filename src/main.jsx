import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';

import Home from './Home/Home';


import AddProduct from './BRands/AddProduct';


import Mycart from './Pages/Mycart';
import Login from './Login/LogIn';
import Register from './Register/Register';
import AuthProvider from './FirebaseConfig/AuthProvider';

import IndividualPages from './BRands/IndividualPages';
import UpdateProduct from './BRands/UpdateProduct';
import Details from './BRands/Details';
import PrivateRoute from './Root/PrivateRoute';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,


      },
      {
        path: "/addProduct",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>

      },
      {
        path: "/myCart",
        element: <PrivateRoute><Mycart></Mycart></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/cart')

      },
      {
        path: "/login",
        element: <Login></Login>

      },
      {
        path: "/register",
        element: <Register></Register>
      },

    
      {
        path: "/individualPages/:brandName/updateProduct/:id",
        element:<UpdateProduct></UpdateProduct>,
        loader:({params}) => fetch(`http://localhost:5000/product/${params.id}`)
      },


      {
        path: '/individualPages/:brandName',
        element: <PrivateRoute><IndividualPages /></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/product')
      },
      {
        path: "/individualPages/:brandName/details/:id",
        element:<Details></Details>,
        loader:({params}) => fetch(`http://localhost:5000/product/${params.id}`)
      },
      




    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> <RouterProvider router={router} /></AuthProvider>
  
  </React.StrictMode>,
)
