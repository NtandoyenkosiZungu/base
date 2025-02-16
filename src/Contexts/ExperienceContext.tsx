import { createContext, useState, ReactNode } from "react";


interface childProp {
    children: ReactNode;
}

export interface ExperienceEntry {
    workplace: string;
    role: string;
    startDate: string;
    endDate: string;
    description: string;

}

interface experienceContextProps {
    experienceEntries: ExperienceEntry[];
    addExperienceEntry: () => void;
    updateExperienceEntry: (index: number, field: keyof ExperienceEntry, value: string) => void;
    removeExperienceEntry: (index: number) => void;
}

export const ExperienceContext = createContext< experienceContextProps | undefined>(undefined);

export function ExperienceContextProvider({ children }: childProp) {

    const [experienceEntries, setExperienceEntries] = useState<ExperienceEntry[]>([]);

    const addExperienceEntry = () => {
        setExperienceEntries([
            ...experienceEntries,
            {
                workplace: '',
                role: '',
                startDate: '',
                endDate: '',
                description: '',
            },
        ]);
    };

    const updateExperienceEntry = (
        index: number,
        field: keyof ExperienceEntry,
        value: string
    ) => {
        const updatedEntries = experienceEntries.map((entry, i) => i === index ? { ...entry, [field]: value } : entry
        );
        setExperienceEntries(updatedEntries);
    };

    const removeExperienceEntry = (index: number) => {
        const updatedEntries = experienceEntries.filter((_, i) => i !== index);
        setExperienceEntries(updatedEntries);
    };

    return (
        <ExperienceContext.Provider value={{ experienceEntries, addExperienceEntry, updateExperienceEntry, removeExperienceEntry }}>
            {children}
        </ExperienceContext.Provider>
    );
}
