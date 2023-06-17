import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Banner from './component/Banner/Banner.jsx';
import About from './pages/About/About.jsx';
import Skill from './pages/Skill/Skill.jsx';
import Projects from './pages/Projects/Projects.jsx';
import Contact from './pages/Contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      { path: '/', element: <Banner></Banner> },
      { path: '/about', element: <About></About>},
      { path: '/skill', element: <Skill></Skill>},
      { path: '/project', element: <Projects></Projects>},
      { path: '/contact', element: <Contact></Contact>},
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
