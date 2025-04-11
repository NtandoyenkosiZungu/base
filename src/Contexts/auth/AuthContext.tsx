import { createContext, ReactNode, useContext, useState, useEffect } from "react";


interface childProp {
    children: ReactNode;
}


interface AuthenticationProps{
    token: string | null;
    setToken: (value: string | null)=> void;
}

export const AuthContext = createContext<AuthenticationProps| undefined>(undefined);

export function AuthContextProvider({children}: childProp){
    const [token, setUserToken] = useState<string | null>(null);

    useEffect(() => {
        const savedToken = localStorage.getItem("authToken");
        if (savedToken) {
          setToken(savedToken);
        }
    }, []);

    const setToken = (value: string| null) => {
        setUserToken(value);
    }

    return (
        <AuthContext.Provider value={{token, setToken}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (! context) {
        throw new Error ("useAuth must be within an AuthContextProvider")
    }
    return context;
}