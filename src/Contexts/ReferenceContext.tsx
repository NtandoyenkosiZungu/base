import { useState, createContext, ReactNode } from "react";

interface childProp {
    children: ReactNode;
}

export interface ReferenceEntry {
    employer: string;
    position: string;
    workplace: string;
    phone: string
    email: string;
}

interface ReferenceContextProps  {
    referenceEntries: ReferenceEntry[];
    addReferenceEntry: () => void;
    updateReferenceEntry: (index : number, field : keyof ReferenceEntry, value : string ) => void;
    removeReferenceEntry: (index : number) => void;
}

export const ReferenceContext = createContext<ReferenceContextProps| undefined>(undefined);

export function ReferenceContextProvider({children}: childProp){
    const [referenceEntries, setReferenceEntries] =useState<ReferenceEntry[]>([]);
    
    const addReferenceEntry= () => {
        setReferenceEntries([
            ...referenceEntries,
            {
                employer:'',
                position:'',
                workplace:'',
                phone:'',
                email:'',
            }
        ]);
    }

    const updateReferenceEntry= (
        index: number,
        field: keyof ReferenceEntry,
        value: string
    ) => {
        const updatedEntries = referenceEntries.map((entry, i)=> 
            i === index ? { ...entry, [field]: value } : entry
        );
        setReferenceEntries(updatedEntries);
    }

    const removeReferenceEntry = (index: number) => {
        const updatedEntries = referenceEntries.filter((_, i) => i !== index )
        setReferenceEntries(updatedEntries);
    }

    return (
        <ReferenceContext.Provider value={{referenceEntries, addReferenceEntry, updateReferenceEntry, removeReferenceEntry}}>
            {children}
        </ReferenceContext.Provider>
    )
}
