import { createContext, useState } from "react";


interface TemplateGalleryContextType {
    template: string;
    setTemplate: (value: string) => void;
    isTemplateGalleryOpen: boolean;
    setIsTemplateGalleryOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TemplateGalleryContext = createContext<TemplateGalleryContextType | undefined>(undefined);

export const TemplateGalleryProvider = ({ children }: { children: React.ReactNode }) => {
    const [isTemplateGalleryOpen, setIsTemplateGalleryOpen] = useState<boolean>(false);
    const [template, setTemplate] = useState<string>("");

    

    return (
        <TemplateGalleryContext.Provider value={{ isTemplateGalleryOpen, setIsTemplateGalleryOpen, template, setTemplate }}>
            {children}
        </TemplateGalleryContext.Provider>
    );
};