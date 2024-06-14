import { createContext, useState, useEffect, useContext } from "react";
import { getCurrentUser } from "../lib/appwrite";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getCurrentUser()
            .then((user) => {
                if (!user) {
                    setIsLoggedIn(false);
                    setIsLoading(false);
                    return
                }
                setUser(user);
                setIsLoggedIn(true);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setIsLoading(false))
    }, [])

    return (
        <GlobalContext.Provider
            value={{
                isLoggedIn,
                setIsLoggedIn,
                user,
                setUser,
                isLoading
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;