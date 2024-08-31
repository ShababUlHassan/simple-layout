import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from "./components/Home"
import Blogs from "./components/Blogs"
import About from "./components/About"
import Contact from "./components//Contact"
import App from './App.tsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import {InfoProvider} from "./Hooks/useContext.jsx"
import { Provider } from 'react-redux'
import {store} from "./Store/store"
// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<App />,
//     children:[
//       {
//         path:"",
//         element:<Home />
//       },
//       {
//         path:"/about",
//         element:<About />
//       },
//       {
//         path:"/blogs",
//         element:<Blogs />
//       },
//       {
//         path:"/contact",
//         element:<Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />}>
    <Route path='' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/blogs' element={<Blogs />} />
    <Route path='/contact' element={<Contact />} />
  </Route>
))

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <InfoProvider>
    <RouterProvider router={router} />
    </InfoProvider>
  </Provider>,
)
