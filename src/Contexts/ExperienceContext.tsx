import { createContext, useState, ReactNode } from "react";

interface ExperienceContextType {
    workplace: string;
    title: string;
    address : string;
    phone : string;
    startDate: string
    endDate: string

    setWorkplace: (workplace: string) =>void;
    setTitle: (title: string) =>void;
    setAddress: (address: string) =>void;
    setPhone: (phone: string) =>void;
    setStartDate: (startDate: string) =>void;
    setEndDate: (endDate: string) =>void
}

export const ExperienceContext = createContext<ExperienceContextType | undefined>(undefined);

interface ExperienceContextProviderProps {
    children: ReactNode;
}

export function ExperienceContextProvider({children}: ExperienceContextProviderProps){
    const [workplace, setWorkplace] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");

    const contextValue = {
        workplace,
        title,
        address,
        phone,
        startDate,
        endDate,

        setWorkplace,
        setTitle,
        setAddress,
        setPhone,
        setStartDate,
        setEndDate,
    }

    return (
        <ExperienceContext.Provider value={contextValue} >
            {children}
        </ExperienceContext.Provider>
    )
}