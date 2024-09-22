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
const App = () => {

  return (
    <>
          <Router>
            <NavBar />
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
        </Router>
    </>
  )
} 

export default App;
