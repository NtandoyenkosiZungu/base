import { createContext, useState, ReactNode, Children } from "react";

interface EducationContextType {
    institution: string;
    location: string;
    level: string;
    field: string;
    startDate: string;
    endDate: string;

    setInstitution : (institution: string) => void;
    setLocation : (location:string) => void;
    setLevel : (level: string) => void;
    setField : (field:string) => void;
    setStartDate : (startDate: string) => void;
    setEndDate : (endDate: string) => void;
}

export const EducationContext = createContext< EducationContextType | undefined>(undefined);

interface EducationContextProviderProps {
    children: ReactNode;
}

export function EducationContextProvider({children}: EducationContextProviderProps) {
    const [institution, setInstitution] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [level, setLevel] = useState<string>("");
    const [field, setField] = useState<string>("");
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");

    const contextValue: EducationContextType = {
        institution,
        location,
        level,
        field,
        startDate,
        endDate,

        setInstitution,
        setLocation,
        setLevel,
        setField,
        setStartDate,
        setEndDate
    }
    return (
        <EducationContext.Provider value={contextValue}>
            {children}
        </EducationContext.Provider>
    )
}

export const EducationFunctionContext = createContext< any| undefined>(undefined);

export function EducationFunctionContextProvider({children}: EducationContextProviderProps){
    const [institution, setInstitution] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [level, setLevel] = useState<string>("");
    const [field, setField] = useState<string>("");
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");

    const contextFuncion = () => {
        const contextData: EducationContextType = {
            institution,
            location,
            level,
            field,
            startDate,
            endDate,
    
            setInstitution,
            setLocation,
            setLevel,
            setField,
            setStartDate,
            setEndDate
        }

        return contextData;
    }

    return (
        <EducationFunctionContext.Provider value={contextFuncion}>
            {children}
        </EducationFunctionContext.Provider>
    )

}