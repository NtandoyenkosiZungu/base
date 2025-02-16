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
    addTool: (index: number, tool: string)=> void;
    removeTool: (index: number)=> void;
}

export const ProjectContext = createContext<ProjectContextProps | undefined>(undefined);

export function ProjectContextProvider ({children}: childProp) {
    const [projectEntries, setProjectEntries] = useState<ProjectEntry[]>([]);

    const addProjectEntry = () => {
        setProjectEntries(prevEntries => [
            ...prevEntries,
            {
                project: '',
                link: '',
                tools: [],
                description:''
            }
        ]);
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

    const addTool = (index: number, tool: string) => {
        const updatedEntries = projectEntries.map((entry, i)=> 
            i === index ? { ...entry, tools: [...entry.tools, tool] } : entry
        );
        console.log(updatedEntries[0].tools);
        
        setProjectEntries(updatedEntries);
    }

    const removeTool = (index: number) => {
        const updatedEntries = projectEntries.map((entry, i)=> 
            i === index ? { ...entry, tools: entry.tools.slice(0, -1) } : entry
        );
        console.log(updatedEntries[0].tools);
        
        setProjectEntries(updatedEntries)
    }

    return (
        <ProjectContext.Provider value={{projectEntries, addProjectEntry, updateProjectEntry, removeProjectEntry, addTool, removeTool}}>
            {children}
        </ProjectContext.Provider>
    )
}
