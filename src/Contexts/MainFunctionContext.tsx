import {createContext, ReactNode } from "react";
import { EducationContextProvider } from "./EducationContext";
import { PersonalDetailsContextProvider } from "./PersonalDetailsContext";


const MainContext = createContext<any | undefined>(undefined);
interface MainProps {
    children: ReactNode;
}

export function MainContextProvider({children}: MainProps){

    return (
        <MainContext.Provider value={{}}>
            <EducationContextProvider>
                <PersonalDetailsContextProvider>
                    {children}
                </PersonalDetailsContextProvider>
            </EducationContextProvider>
        </MainContext.Provider>
    )
}
