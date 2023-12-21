import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import Planos from './pages/planos';
import SobreNos from './pages/sobre-nos';
import Blog from './pages/blog';
import Contato from './pages/contato';
import TrabalheConosco from './pages/trabalhe-conosco';
import Pet from './pages/pet';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "planos",
    element: <Planos />
  },
  {
    path: "pet",
    element: <Pet />
  },
  {
    path: "sobre-nos",
    element: <SobreNos />
  },
  {
    path: "blog",
    element: <Blog />
  },
  {
    path: "contato",
    element: <Contato />
  },
  {
    path: "trabalhe-conosco",
    element: <TrabalheConosco />
  }
])

ReactDOM.render(
  <React.StrictMode>
   <RouterProvider  router={router}/>
  </React.StrictMode>,
  document.getElementById('root')
);
