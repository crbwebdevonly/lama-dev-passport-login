import { createContext, useReducer, useState } from "react";

const initialState = {
     user: "",
     email: "",
};
export const UserContext = createContext(initialState);

export const UserContextProvider = ({ children }) => {
     // const [state, dispatch] = useReducer(reducer, initialState)
     const [user, setUser] = useState("");
     const [email, setEmail] = useState("");

     return (
          <UserContext.Provider
               value={{
                    userC: user,
                    email: email,
                    setUser: setUser,
               }}
          >
               {children}
          </UserContext.Provider>
     );
};

// export default UserContext;
