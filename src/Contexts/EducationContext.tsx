import { createContext, useState, ReactNode } from "react";

export interface childProp {
    children: ReactNode;
}

export interface EducationEntry {
    institution: string;
    location: string;
    level: string;
    field: string;
    start_date: string;
    end_date: string;
  }

interface funcEducationProps {
    educationEntries: EducationEntry[];
    addEducationEntry: ()=> void;
    updateEducationEntry: (index: number, field: keyof EducationEntry, value: string) => void;
    removeEducationEntry: (index: number) => void;
}
  
export const EducationFunctionContext = createContext< funcEducationProps | undefined>(undefined);

export function EducationFunctionContextProvider({children}: childProp){
    const [educationEntries, setEducationEntries] = useState<EducationEntry[]>([])

    const addEducationEntry = () => {
        setEducationEntries([
            ...educationEntries,
            {
                institution: '',
                location: '',
                level: '',
                field: '',
                start_date: '',
                end_date: '',
            },
        ])
    }

    const updateEducationEntry = (
        index: number,
        field: keyof EducationEntry,
        value: string
      ) => {
        const updatedEntries = educationEntries.map((entry, i) =>
          i === index ? { ...entry, [field]: value } : entry
        );
        setEducationEntries(updatedEntries);
      };
    

    const removeEducationEntry = (index: number) => {
        const updatedEntries = educationEntries.filter((_, i) => i!== index);
        setEducationEntries(updatedEntries);
    }

    return (
        <EducationFunctionContext.Provider value={{ educationEntries, addEducationEntry, updateEducationEntry, removeEducationEntry }}>
            {children}
        </EducationFunctionContext.Provider>
    )
}