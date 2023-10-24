import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'


// const router=(createBrowserRouter[ //object chaye in {}
//   {
//     //parent
//     path: '/', //top level element iske andar rendering hoga
//     element: <Layout/>,
    
//     children:[
//       {
//         path:"", //home me sab ayega
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact />
//       }
//     ]

//   }
// ])
const router = createBrowserRouter(
  //first parent hai ie.layout ..remaining nested hai
  createRoutesFromElements(
    <Route path='/' element={<Layout />}> 
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />}/>
      <Route path='user/:userid' element={<User />} />
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  //prop leta hai {router}
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>,
)
