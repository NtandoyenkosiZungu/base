import { createContext, ReactNode, useState } from "react";

interface childProp {
    children: ReactNode;
}

export interface softSkillEntry{
    skill: string;
}


interface softSkillsProps{
    softSkillEntries: softSkillEntry[];
    addSoftSkill: () => void;
    updateSoftSkill: (index:number, field: keyof softSkillEntry, value:string) => void;
    removeSoftSkill: (index:number) =>  void;
}

export const SoftSkillContext = createContext<softSkillsProps | undefined>(undefined);

export function SoftSkillContextProvider({children} : childProp){
    const [softSkillEntries, setSoftSKillEntries] = useState<softSkillEntry[]>([]);

    const addSoftSkill = () =>{
        setSoftSKillEntries([
            ...softSkillEntries,
            {
                skill: ''
            },
        ]);
    }

    const updateSoftSkill = (
        index: number, 
        field: keyof softSkillEntry, 
        value:string
    ) => {
        const updatedEntries = softSkillEntries.map((entry, i) => i === index ? {...entry, [field]:value} : entry)
        setSoftSKillEntries(updatedEntries);
    }

    const removeSoftSkill = (index:number) => {
        const updatedEntries =softSkillEntries.filter((_, i) => i !== index);
        setSoftSKillEntries(updatedEntries);
    } 

    return (
        <SoftSkillContext.Provider value ={{softSkillEntries, updateSoftSkill, removeSoftSkill, addSoftSkill}}>
            {children}
        </SoftSkillContext.Provider>
    )
}