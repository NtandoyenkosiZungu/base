import { useState, createContext, ReactNode } from "react";



interface childProp {
    children: ReactNode;
}


export interface ProjectEntry {
    project: string;
    link: string;
    tools: string[];
    description: string;
}

interface ProjectContextProps {
    projectEntries: ProjectEntry[];
    addProjectEntry: ()=> void;
    updateProjectEntry: (index:number, field: keyof ProjectEntry, value: string)=> void;
    removeProjectEntry: (index: number)=> void;
}

export const ProjectContext = createContext<ProjectContextProps | undefined>(undefined);

export function ProjectContextProvider ({children}: childProp) {
    const [projectEntries, setProjectEntries] = useState<ProjectEntry[]>([]);

    const addProjectEntry = () => {
        setProjectEntries(
            [...projectEntries,
                {
                    project: '',
                    link: '',
                    tools: [],
                    description:''
                }
            ]
        )
    }

    const updateProjectEntry = (
            index: number, 
            field: keyof ProjectEntry, 
            value: string
        ) => {
            const updatedEntries = projectEntries.map((entry, i)=> 
                i === index ? { ...entry, [field]: value } : entry
            );
            setProjectEntries(updatedEntries);
    }

    const removeProjectEntry = (index: number) => {
        const updatedEntries: ProjectEntry[] = projectEntries.filter((_, i)=> i !== index ); 
        setProjectEntries(updatedEntries);
    }

    return (
        <ProjectContext.Provider value={{projectEntries, addProjectEntry, updateProjectEntry, removeProjectEntry}}>
            {children}
        </ProjectContext.Provider>
    )
}
