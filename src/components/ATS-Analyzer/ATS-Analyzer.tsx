import { useContext, useState } from "react";
import { Dropdown } from "../Forms/SubFormComponents"
import '../../assets/styles/ats-analyzer.css'
import { PersonalDetailsContext } from "../../Contexts/PersonalDetailsContext";
import { EducationFunctionContext } from "../../Contexts/EducationContext";
import { ExperienceContext } from "../../Contexts/ExperienceContext";
import { ProjectContext } from "../../Contexts/ProjectContext";
import { TechnicalSkillsContext } from "../../Contexts/TechnicalSkillsContext";
import { CertificationContext } from "../../Contexts/CertificationContext";
import { ReferenceContext } from "../../Contexts/ReferenceContext";
import { SoftSkillContext } from "../../Contexts/SoftSkillsContext";
import { AchievementContext } from "../../Contexts/AchievementContext";
import { analyzeResume } from "./services/geminiService";
import { ATSContext } from "../../Contexts/ats/ATSContext";

export const ATSComponent: React.FC = () => {
    return (
        <JobDescriptionInput />
    )
}


const cleanText = (text: string): string => {
    const regularExpression = /<\/?(br|p|ul|ol|li|strong)\b[^>]*>/gi;
    let cleantext = text.replace(regularExpression, '');
    return cleantext;
}

export const JobDescriptionInput: React.FC = () => {
    const [description, setDescription] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);


        //ATS Context
        const ats = useContext(ATSContext);
        if (!ats) return null;

        const personalInfo = useContext(PersonalDetailsContext);
        if (!personalInfo) return null;
        
        const education = useContext(EducationFunctionContext);
        if (!education) return null;

        const experience = useContext(ExperienceContext);
        if(!experience) return null;

        const projects = useContext(ProjectContext);
        if (!projects) return null;

        const technicalSkills = useContext(TechnicalSkillsContext);
        if (!technicalSkills) return null;

        const softSKills = useContext(SoftSkillContext);
        if (!softSKills) return null;

        const achievements = useContext(AchievementContext);
        if (!achievements) return null;
        const certifications = useContext(CertificationContext);
        if (!certifications) return null;

        const reference = useContext(ReferenceContext);
        if (!reference) return null;

    const handleAnalyzeClick = async() => {
        
        try {
            setIsLoading(true);

    let resumeText = `
${"Name: "+personalInfo.name}
${"Email: "+personalInfo.email}
${"Phone: "+personalInfo.phone}
${"LinkedIn: " +personalInfo.linkedin}
${"GitHub: " +personalInfo.github}
${
(education.educationEntries.length > 0)?
`Education: 
`+
education.educationEntries.map((entry) => {
return `${entry.institution}  
Location: ${entry.location}
Title:${ entry.level + ' in ' + entry.field}   
Durarion:${entry.start_date + ' - ' + entry.end_date}
`     
}).join(" ") : ""
}
${
(experience.experienceEntries.length > 0)?
`Experience: 
`+
experience.experienceEntries.map((entry) => {
return `Workplace: ${entry.workplace} 
Duration: ${entry.startDate + ' - ' + entry.endDate}
Title: ${entry.role}
Description: ${cleanText(entry.description)}
`
}).join(" ") : ""
}
${
(projects.projectEntries.length > 0)?
`Projects: 
`+
projects.projectEntries.map((entry) => {
return `Project: ${entry.project}  
Link: ${entry.link}
Description: ${cleanText(entry.description)}
Tools: ${entry.tools}
`
}).join(" ") : ""
}
${
technicalSkills.TechnicalSkillEntries.length > 0?
`Technical Skills: 
`+
technicalSkills.TechnicalSkillEntries.map((entry) => {
return cleanText(entry.skill)
}).join(" ") : ""
}
${
softSKills.softSkillEntries.length > 0?
`Soft Skills: 
`+
softSKills.softSkillEntries.map((entry) => {
return cleanText(entry.skill)
}).join(" ") : ""
}
${
certifications.CertificationEntries.length > 0?
`Certifications: 
`+
certifications.CertificationEntries.map((entry) => {
return `Title: ${entry.title}  
Provider: ${entry.provider}      Acquired: ${entry.date}`
}).join(" ") : ""
}
${
achievements.AchievementEntries.length > 0?
`Achievements: 
`+
achievements.AchievementEntries.map((entry) => {
return `${cleanText(entry.achievement)}`
}).join(" ") : ""
}
`;

    const response = await analyzeResume(resumeText, description)
    ats.setResult(response);
    ats.setIsAvailable(true);

} catch (error) {
    console.log(error);
    ats.setIsAvailable(false);
    
}finally {
    setIsLoading(false);
}
        
    }

    return (
    <Dropdown title="Job Description">
        <div>
            <label htmlFor="job-description" className="job-description-label">Job Description</label>
            <span style={{paddingBottom: "40px"}}>
                <JobDescriptionEditor
                    description={description}
                    setDescription={setDescription}
                />
            </span>
        </div>
        <button className="analyze-btn" disabled={isLoading} onClick={() => handleAnalyzeClick()}>
           {isLoading? "Analysing " : "Analyze"}
           {isLoading && <div className="analyze-loader"></div>}
        </button>
    </Dropdown>
    )
}

interface JobDescriptionInputProps {
  description: string;
  setDescription: (value: string) => void;
}

export const JobDescriptionEditor: React.FC<JobDescriptionInputProps> = ({ description, setDescription }) => {
  return (
    <div>
      <textarea name="job-description" id="job-description"  value={description} onChange={(e) => setDescription(e.target.value)}/>
    </div>
  );
};
