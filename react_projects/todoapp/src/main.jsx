import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TodoList } from './TodoList.jsx';
import AboutUs from './components/chisom.jsx';
import { MyProfile } from './components/Awwal.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path:"/todolist",
    element:<TodoList/>
  },
  {
    path:"/aboutus",
    element:<AboutUs/>
  },

  {
    path: "/portfolio",
    element: <MyProfile/>
  },
 
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
 <RouterProvider router={router} />
  </React.StrictMode>,
)
