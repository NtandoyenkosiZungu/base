import DetailForm from "../Forms/detailForm"
import '../../assets/styles/home.css'

import React, { useContext } from "react";
import { TemplateGalleryContext } from "../../Contexts/templateGalleryContext"
import { PersonalDetailsContext } from "../../Contexts/PersonalDetailsContext";
import { EducationFunctionContext } from "../../Contexts/EducationContext";
import { ExperienceContext } from "../../Contexts/ExperienceContext";
import { ProjectContext } from "../../Contexts/ProjectContext";
import { CertificationContext } from "../../Contexts/CertificationContext";
import { SoftSkillContext } from "../../Contexts/SoftSkillsContext";
import { ReferenceContext } from "../../Contexts/ReferenceContext";
import { TechnicalSkillsContext } from "../../Contexts/TechnicalSkillsContext";
import { AchievementContext } from "../../Contexts/AchievementContext";



const Home: React.FC = () => {
    const templateGalleryContext = useContext(TemplateGalleryContext)
    if (!templateGalleryContext) return null;
    const {setIsTemplateGalleryOpen, isTemplateGalleryOpen} = templateGalleryContext;
    
    const handleOpenGallery = () => {
        setIsTemplateGalleryOpen(!isTemplateGalleryOpen);
    }

    const personaldetails = useContext(PersonalDetailsContext);
    if (!personaldetails) return null;
    const { name, surname, address, phone, email, role, summary, linkedin, github } = personaldetails;

    const educationContext = useContext(EducationFunctionContext);
    if (!educationContext) return null;
    const {educationEntries} = educationContext;

    const experienceContext = useContext(ExperienceContext);
    if (!experienceContext) return null;
    const { experienceEntries } = experienceContext;

    const projectContext = useContext(ProjectContext);
    if (!projectContext) return null;
    const { projectEntries } = projectContext;

    const certificationContext = useContext(CertificationContext);
    if (!certificationContext) return null;
    const { CertificationEntries } = certificationContext;

    const referenceContext = useContext(ReferenceContext);
    if (!referenceContext) return null;
    const { referenceEntries } = referenceContext;

    const technicalSkillContext = useContext(TechnicalSkillsContext);
    if (!technicalSkillContext) return null;
    const { TechnicalSkillEntries } = technicalSkillContext;

    const achievementContext = useContext(AchievementContext);
    if (!achievementContext) return null;
    const { AchievementEntries } = achievementContext;

    const softSkillContext = useContext(SoftSkillContext);
    if (!softSkillContext) return null;
    const {softSkillEntries} = softSkillContext;

    // Combine all the data into a single object

    const allData = {
        template: localStorage.getItem('template')?.toLowerCase() || "template-two",
        userDetails: {
            name: name,
            surname: surname,
            address: address,
            phone: phone,
            email: email,
            role: role,
            summary: summary,
            linkedin: linkedin,
            github: github,
            education: educationEntries || null,
            experience: experienceEntries || null,
            project: projectEntries || null,
            certification: CertificationEntries || null,
            reference: referenceEntries || null,
            technicalSkills: TechnicalSkillEntries || null,
            achievement: AchievementEntries || null,
            softSkills: softSkillEntries || null,
        }
        
    }


    const onDownloadButtonClick = () => {
        //console.log(allData);
        const apiURL = import.meta.env.VITE_APP_API_SIGNUP_URL
        fetch(`${apiURL}/download-resume`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(allData),
        })
        .then((response) => {
            // Check if the response is successful
            if (!response.ok) {
                throw new Error('Failed to generate PDF');
            }
            return response.blob();
        })
        .then((blob) => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${name} ${surname} Resume.pdf`;  // Name the downloaded file
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('There was an issue generating your resume.');
        });
    }
    
    return (
        <>
            <div className="banner">
                <h1>HiResume</h1>
               <div className="banner-btns">
                    <button className="download-btn"  onClick={()=> handleOpenGallery()}>Templates</button>
                    <button onClick={onDownloadButtonClick} className="download-btn">Download</button>
               </div>
               <div className="account-info">
                
               </div>
            </div>
            <DetailForm/>
        </>
    )
}

export default Home;