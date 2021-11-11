import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Postpage from "./pages/Postpage";
import Loginpage from "./pages/Loginpage";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

function App() {
     //======================================================
     const { userC } = useContext(UserContext);
     //======================================================
     //======================================================
     const user = true;
     //======================================================
     return (
          <div className="App">
               <BrowserRouter>
                    <Navbar />
                    <Routes>
                         <Route path="/" element={<Homepage />} />
                         <Route
                              path="posts/:id"
                              element={
                                   !user ? (
                                        <Navigate to="/login" />
                                   ) : (
                                        <Postpage />
                                   )
                              }
                         />
                         <Route
                              path="login"
                              element={
                                   user ? <Navigate to="/" /> : <Loginpage />
                              }
                         />
                    </Routes>
               </BrowserRouter>
          </div>
     );
}

export default App;
