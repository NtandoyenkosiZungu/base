import { createContext, ReactNode, useState } from "react";

interface childProp {
    children: ReactNode
}

export interface TechnicalSkillEntry {
    skill: string;
}

interface TechnicalSkillsContextProps {
    TechnicalSkillEntries: TechnicalSkillEntry[];
    addTechnicalSkillEntry: () => void;
    updateTechnicalSkillEntry: (index: number, field: keyof TechnicalSkillEntry, value: string) => void;
    removeTechnicalSkillEntry: (index: number) => void;
}

export const TechnicalSkillsContext = createContext<TechnicalSkillsContextProps | undefined>(undefined);

export function TechnicalSkillsContextProvider({ children }: childProp) {

    const [TechnicalSkillEntries, setTechnicalSkillEntries] = useState<TechnicalSkillEntry[]>([]);

    const addTechnicalSkillEntry = () => {
        setTechnicalSkillEntries([
            ...TechnicalSkillEntries,
            {
                skill: '',
            },
        ]);
    }

    const updateTechnicalSkillEntry = (
        index: number,
        field: keyof TechnicalSkillEntry,
        value: string
    ) => {
        const updatedEntries = TechnicalSkillEntries.map((entry, i) => i === index ? { ...entry, [field]: value } : entry
        );
        setTechnicalSkillEntries(updatedEntries);
    }

    const removeTechnicalSkillEntry = (index: number) => {
        const updatedEntries = TechnicalSkillEntries.filter((_, i) => i !== index);
        setTechnicalSkillEntries(updatedEntries);
    }

    return (
        <TechnicalSkillsContext.Provider value={{ TechnicalSkillEntries, addTechnicalSkillEntry, updateTechnicalSkillEntry, removeTechnicalSkillEntry }}>
            {children}
        </TechnicalSkillsContext.Provider>
    )
}