import { createContext, ReactNode, useState } from "react";

interface childProp {
    children: ReactNode
}

export interface CertificationEntry {
    title: string;
    provider: string;
    date: string;
}


interface achivementContextProps {
    CertificationEntries: CertificationEntry[];
    addCertificationEntry: () => void;
    updateCertificationEntry: (index: number, field: keyof CertificationEntry, value: string) => void;
    removeCertificationEntry: (index: number) => void;
    setCertificationEntries: React.Dispatch<React.SetStateAction<CertificationEntry[]>>;
}

export const CertificationContext = createContext<achivementContextProps | undefined>(undefined);

export function CertificationContextProvider({ children }: childProp) {

    const [CertificationEntries, setCertificationEntries] = useState<CertificationEntry[]>([]);

    const addCertificationEntry = () => {
        setCertificationEntries([
            ...CertificationEntries,
            {
                title: '',
                provider: '',
                date: '',
            },
        ]);
    };

    const updateCertificationEntry = (
        index: number,
        field: keyof CertificationEntry,
        value: string
    ) => {
        const updatedEntries = CertificationEntries.map((entry, i) => i === index ? { ...entry, [field]: value } : entry
        );
        setCertificationEntries(updatedEntries);
    };

    const removeCertificationEntry = (index: number) => {
        const updatedEntries = CertificationEntries.filter((_, i) => i !== index);
        setCertificationEntries(updatedEntries);
    };

    return (
        <CertificationContext.Provider value={{ CertificationEntries, addCertificationEntry, updateCertificationEntry, removeCertificationEntry, setCertificationEntries }}>
            {children}
        </CertificationContext.Provider>
    )
}