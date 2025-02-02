import {createContext, ReactNode } from "react";
import {EducationFunctionContextProvider } from "./ValueContexts";
import { PersonalDetailsContextProvider } from "./PersonalDetailsContext";


const MainContext = createContext<any | undefined>(undefined);
interface MainProps {
    children: ReactNode;
}

export function MainContextProvider({children}: MainProps){

    return (
        <MainContext.Provider value={{}}>
            <PersonalDetailsContextProvider>
                <EducationFunctionContextProvider>
                {children}
                </EducationFunctionContextProvider>
            </PersonalDetailsContextProvider>
        </MainContext.Provider>
    )
}
