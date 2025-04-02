import { createContext, ReactNode, useState } from "react";

interface childProp {
    children: ReactNode
}

export interface AchievementEntry {
    achievement: string;
}

interface achievementContextProps {
    AchievementEntries: AchievementEntry[];
    addAchievementEntry: () => void;
    updateAchievementEntry: (index: number, field: keyof AchievementEntry, value: string) => void;
    removeAchievementEntry: (index: number) => void;
}

export const AchievementContext = createContext<achievementContextProps | undefined>(undefined);

export function AchievementContextProvider( {children}: childProp) {

    const [AchievementEntries, setAchievementEntries] = useState<AchievementEntry[]>([]);

    const addAchievementEntry = () => {
        setAchievementEntries([
            ...AchievementEntries,
            {
                achievement: '',
            },
        ]);
    }

    const updateAchievementEntry = (
        index: number,
        field: keyof AchievementEntry,
        value: string
    ) => {
        const updatedEntries = AchievementEntries.map((entry, i) => i === index ? { ...entry, [field]: value } : entry
        );
        setAchievementEntries(updatedEntries);
    }

    const removeAchievementEntry = (index: number) => {
        const updatedEntries = AchievementEntries.filter((_, i) => i !== index);
        setAchievementEntries(updatedEntries);
    }

    return (
        <AchievementContext.Provider value={{ AchievementEntries, addAchievementEntry, updateAchievementEntry, removeAchievementEntry }}>
            {children}
        </AchievementContext.Provider>
    )
}


