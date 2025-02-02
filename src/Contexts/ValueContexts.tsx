import { createContext, useState, ReactNode } from "react";


/*
    REUSABLE INTERFACE AND VARIABLES
*/ 
interface childProp {
    children: ReactNode;
}



/* 
    CODE::
    WORK EXPERIENCE CONTEXT DETAILS
*/

export interface EducationEntry {
    institution: string;
    location: string;
    level: string;
    field: string;
    start_date: string;
    end_date: string;
  }

interface funcEducationProps {
educationEntries: EducationEntry[];
addEducationEntry: ()=> void;
updateEducationEntry: (index: number, field: keyof EducationEntry, value: string) => void;
removeEducationEntry: (index: number) => void;
}
  
export const EducationFunctionContext = createContext< funcEducationProps | undefined>(undefined);

export function EducationFunctionContextProvider({children}: childProp){
    const [educationEntries, setEducationEntries] = useState<EducationEntry[]>([])

    const addEducationEntry = () => {
        setEducationEntries([
            ...educationEntries,
            {
                institution: '',
                location: '',
                level: '',
                field: '',
                start_date: '',
                end_date: '',
            },
        ])
    }

    const updateEducationEntry = (
        index: number,
        field: keyof EducationEntry,
        value: string
      ) => {
        const updatedEntries = educationEntries.map((entry, i) =>
          i === index ? { ...entry, [field]: value } : entry
        );
        setEducationEntries(updatedEntries);
      };
    

    const removeEducationEntry = (index: number) => {
        const updatedEntries = educationEntries.filter((_, i) => i!== index);
        setEducationEntries(updatedEntries);
    }

    return (
        <EducationFunctionContext.Provider value={{ educationEntries, addEducationEntry, updateEducationEntry, removeEducationEntry }}>
            {children}
        </EducationFunctionContext.Provider>
    )
}

/* 
    CODE::
    WORK EXPERIENCE CONTEXT DETAILS
*/

export interface ExperienceEntry {
    workplace: string;
    role: string;
    startDate: string;
    endDate: string;
    description: string| null;
}

interface ExperienceContextProps {
    experienceEntries: ExperienceEntry[];
    addExperienceEntry: () => void;
    updateExperienceEntry: (index: number, field: keyof ExperienceEntry, value: string) => void;
    removeExperienceEntry: (index: number) => void;
}

export const experienceContext = createContext<ExperienceContextProps | undefined>(undefined);

export function ExperienceContextProvider({children}: childProp){

    const [experienceEntries, setExperienceEntries] = useState<ExperienceEntry[]>([])

    const addExperienceEntry = () => {
        setExperienceEntries([
            ...experienceEntries,
            {
                workplace: '',
                role: '',
                startDate: '',
                endDate: '',
                description: '',
            },
        ])
    }

    const updateExperienceEntry = (
        index: number,
        field: keyof ExperienceEntry,
        value: string
      ) => {
        const updatedEntries = experienceEntries.map((entry, i) =>
          i === index ? { ...entry, [field]: value } : entry
        );
        setExperienceEntries(updatedEntries);
      };
    
    const removeExperienceEntry = (index: number) => {
        const updatedEntries = experienceEntries.filter((_, i) => i!== index);
        setExperienceEntries(updatedEntries);
    }
   
    return  (
        <experienceContext.Provider value={{experienceEntries, addExperienceEntry, updateExperienceEntry, removeExperienceEntry}}>
            {children}
        </experienceContext.Provider>
    )
}


/*
    CODE::
    PROJECT CONTEXT DETAILS
*/

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

export const projectContext = createContext<ProjectContextProps | undefined>(undefined);

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
        <projectContext.Provider value={{projectEntries, addProjectEntry, updateProjectEntry, removeProjectEntry}}>
            {children}
        </projectContext.Provider>
    )
}


/*
    CODE::
    REFERENCE CONTEXT DETAILS
*/

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

export const referenceContext = createContext<ReferenceContextProps| undefined>(undefined);

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
        <referenceContext.Provider value={{referenceEntries, addReferenceEntry, updateReferenceEntry, removeReferenceEntry}}>
            {children}
        </referenceContext.Provider>
    )
}
