// import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Content from "./pages/Content";
import Contact from "./pages/Contact";
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
            </Routes>
        </Router>
    </>
  )
} 

export default App;
