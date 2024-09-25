// import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Content from "./pages/Content";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Footer from "./components/Footer";

import { Toaster } from 'react-hot-toast';


const App = () => {

  return (
    <>
          <Router>
            <NavBar />
            <Toaster position="top-center" />
            <Routes>
                <Route exact path="/" element={<Content />} />
                <Route
                    path="/Contact"
                    element={<Contact />}
                />
                <Route
                    path="/Project"
                    element={<Project />}
                />
            </Routes>
            <Footer/>
        </Router>
    </>
  )
} 

export default App;
