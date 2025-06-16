import {createContext, ReactNode } from "react";
import {EducationFunctionContextProvider } from "./EducationContext";
import { PersonalDetailsContextProvider } from "./PersonalDetailsContext";
import { ExperienceContextProvider } from "./ExperienceContext";
import { ProjectContextProvider } from "./ProjectContext";
import { ReferenceContextProvider } from "./ReferenceContext";
import { CertificationContextProvider } from "./CertificationContext";
import { AchievementContextProvider } from "./AchievementContext";
import { TechnicalSkillsContextProvider } from "./TechnicalSkillsContext";
import { SoftSkillContextProvider } from "./SoftSkillsContext";
import { ATSContextProvider } from "./ats/ATSContext";



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
                                <CertificationContextProvider>
                                   <AchievementContextProvider>
                                        <TechnicalSkillsContextProvider>
                                            <SoftSkillContextProvider>
                                                <ATSContextProvider>
                                                    {children}
                                                </ATSContextProvider>
                                            </SoftSkillContextProvider>
                                        </TechnicalSkillsContextProvider>
                                   </AchievementContextProvider>
                                </CertificationContextProvider>
                            </ReferenceContextProvider>
                        </ProjectContextProvider>    
                    </ExperienceContextProvider>
                </EducationFunctionContextProvider>
            </PersonalDetailsContextProvider>
        </MainContext.Provider>
    )
}
