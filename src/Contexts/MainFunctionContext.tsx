import {createContext, ReactNode } from "react";
import {EducationFunctionContextProvider } from "./EducationContext";
import { PersonalDetailsContextProvider } from "./PersonalDetailsContext";
import { ExperienceContextProvider } from "./ExperienceContext";
import { ProjectContextProvider } from "./ProjectContext";
import { ReferenceContextProvider } from "./ReferenceContext";


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
                        <ProjectContextProvider>
                            <ReferenceContextProvider>
                                {children}
                            </ReferenceContextProvider>
                        </ProjectContextProvider>    
                    </ExperienceContextProvider>
                </EducationFunctionContextProvider>
            </PersonalDetailsContextProvider>
        </MainContext.Provider>
    )
}
