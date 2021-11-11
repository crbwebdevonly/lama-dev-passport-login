import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Loginpage = () => {
     const {user,email,setUser} = useContext(UserContext)
     return (
          <div className="loginpage-container">
               <div className="main-wrap">
                    <h1>Login page</h1>
                    <div className="left">
                         <button className="login-button">
                              {" "}
                              <i class="fab fa-facebook-square"></i>Facebook
                         </button>
                         <button className="login-button">
                              {" "}
                              <i class="fab fa-google"></i>Google
                         </button>
                         <button className="login-button">
                              {" "}
                              <i class="fab fa-github-square"></i>Github
                         </button>
                    </div>
                    <div className="center">
                         <div className="line"></div>
                         <div className="or">Or</div>
                    </div>
                    <div className="right">
                         <input type="text" placeholder="username" />
                         <input type="text" placeholder="password" />
                         <button
                              className="submit"
                              onClick={() => {
                                   setUser("test1");
                              }}
                         >
                              Submit
                         </button>
                    </div>
               </div>
          </div>
     );
};

export default Loginpage;
