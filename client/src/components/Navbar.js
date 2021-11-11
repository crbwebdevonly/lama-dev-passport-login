import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
     //======================================================
     //======================================================
     const { userC, email, setUser } = useContext(UserContext);
     //======================================================
     // console.log(userC);
     //======================================================
     const user = false;
     //======================================================
     return (
          <div className="navbar-container">
               <div className="logo">
                    <Link to="/" className="link">
                         crbLogo
                    </Link>
               </div>
               {user ? (
                    <ul className="list">
                         <li className="list-item">
                              <div className="avatar-wrap">
                                   <img
                                        src="https://source.unsplash.com/random/300x500"
                                        alt=""
                                   />
                              </div>
                         </li>
                         <li className="list-item">name name</li>
                         <li
                              className="list-item"
                              onClick={() => {
                                   setUser("");
                              }}
                         >
                              logout
                         </li>
                    </ul>
               ) : (
                    <Link to="/login" className="link">
                         Login
                    </Link>
               )}
          </div>
     );
};

export default Navbar;
