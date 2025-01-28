import { createContext, useState, ReactNode } from "react";

// Define the shape of the context value
interface PersonalDetailsContextType {
  name: string;
  surname: string;
  phone: string;
  email: string;
  address: string;

  setName: (name: string) => void;
  setSurname: (surname: string) => void;
  setPhone: (phone: string) => void;
  setEmail: (email: string) => void;
  setAddress: (address: string) => void;
}

// Create the context with a default value
export const PersonalDetailsContext = createContext<PersonalDetailsContextType | undefined>(undefined);

// Define the props for the provider component
interface PersonalDetailsContextProviderProps {
  children: ReactNode;
}

// Create the provider component
export function PersonalDetailsContextProvider({ children }: PersonalDetailsContextProviderProps) {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  // Wrap the context value in an object
  const contextValue: PersonalDetailsContextType = {
    name,
    setName,
    surname,
    setSurname,
    phone,
    setPhone,
    email,
    setEmail,
    address,
    setAddress,
  };

  return (
    <PersonalDetailsContext.Provider value={contextValue}>
      {children}
    </PersonalDetailsContext.Provider>
  );
}