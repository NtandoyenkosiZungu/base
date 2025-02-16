import { createContext, ReactNode, useState } from "react";

interface childProp {
    children: ReactNode
}

export interface AchievementEntry {
    title: string;
    provider: string;
    date: string;
}


interface achivementContextProps {
    achievementEntries: AchievementEntry[];
    addAchievementEntry: () => void;
    updateAchievementEntry: (index: number, field: keyof AchievementEntry, value: string) => void;
    removeAchievementEntry: (index: number) => void;
}

export const AchievementContext = createContext<achivementContextProps | undefined>(undefined);

export function AchievementContextProvider({ children }: childProp) {

    const [achievementEntries, setAchievementEntries] = useState<AchievementEntry[]>([]);

    const addAchievementEntry = () => {
        setAchievementEntries([
            ...achievementEntries,
            {
                title: '',
                provider: '',
                date: '',
            },
        ]);
    };

    const updateAchievementEntry = (
        index: number,
        field: keyof AchievementEntry,
        value: string
    ) => {
        const updatedEntries = achievementEntries.map((entry, i) => i === index ? { ...entry, [field]: value } : entry
        );
        setAchievementEntries(updatedEntries);
    };

    const removeAchievementEntry = (index: number) => {
        const updatedEntries = achievementEntries.filter((_, i) => i !== index);
        setAchievementEntries(updatedEntries);
    };

    return (
        <AchievementContext.Provider value={{ achievementEntries, addAchievementEntry, updateAchievementEntry, removeAchievementEntry }}>
            {children}
        </AchievementContext.Provider>
    )
}