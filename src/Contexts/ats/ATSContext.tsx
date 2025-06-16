import React, { createContext, useState } from "react";
import { AnalysisResult } from "../../components/ATS-Analyzer/types";


interface childProp{
    children: React.ReactNode
}

interface ATSProps {
    analysisResults: AnalysisResult,
    isAvailable: boolean;
    setIsAvailable: (value: boolean) => void;
    setResult: (result: AnalysisResult) => void;
}

export const ATSContext = createContext<ATSProps|undefined>(undefined);

export function ATSContextProvider({children} : childProp){
    const [analysisResults, setAnalysisResults] = useState<AnalysisResult>({} as AnalysisResult);4
    const [isAvailable, setIsAvailable] = useState<boolean>(false);

    const setResult = (result: AnalysisResult) => {
        setAnalysisResults(result);
    }
    return (
        <ATSContext.Provider value={{analysisResults, setResult, isAvailable, setIsAvailable}}>
            {children}
        </ATSContext.Provider>
    )
}

