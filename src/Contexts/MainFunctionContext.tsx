import {createContext, ReactNode } from "react";
import {EducationFunctionContextProvider } from "./EducationContext";
import { PersonalDetailsContextProvider } from "./PersonalDetailsContext";
import { ExperienceContextProvider } from "./ExperienceContext";


const MainContext = createContext<any | undefined>(undefined);
interface MainProps {
    children: ReactNode;
}

export function MainContextProvider({children}: MainProps){

    return (
        <MainContext.Provider value={{}}>
            <PersonalDetailsContextProvider>
                <EducationFunctionContextProvider>
                    <ExperienceContextProvider>
                        {children}
                    </ExperienceContextProvider>
                </EducationFunctionContextProvider>
            </PersonalDetailsContextProvider>
        </MainContext.Provider>
    )
}
