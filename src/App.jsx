import { BrowserRouter as Router, Routes, Route, Link, createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Home from './Components/Home/Home';
import Layout from "./Components/Layout/Layout";
import Contact from "./Components/Contact/Contact";
import Skills from "./Components/Skills/Skills";


const router = createBrowserRouter(
  [
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'Projects', element: <Projects /> },
        { path: 'contact', element: <Contact /> },
        { path: 'Skills', element: <Skills /> },
        { path: '*', element: <h1>Not Found</h1> }
      ]
    }
  ]
);
export default function App() {
  return <>

    <RouterProvider router={router} />

  </>
}
