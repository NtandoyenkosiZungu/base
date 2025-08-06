import '../../assets/styles/home.css'

import { getAuth, onAuthStateChanged } from "firebase/auth/cordova";

import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
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
import { icons } from "../Extra/icons";
import { LoadingFallback } from '../Extra/LoadingFallback';
import { MainContextProvider } from '../../Contexts/MainFunctionContext';


const DetailForm = lazy(() => import('../Forms/detailForm'))

const Home: React.FC = () => {

    const apiURL = import.meta.env.VITE_APP_API_SIGNUP_URL
    const [downloadStatus, setDownloadStatus] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("username");

    const templateGalleryContext = useContext(TemplateGalleryContext)
    if (!templateGalleryContext) return null;
    const {setIsTemplateGalleryOpen, isTemplateGalleryOpen} = templateGalleryContext;
    
    const handleOpenGallery = () => {
        setIsTemplateGalleryOpen(!isTemplateGalleryOpen);
    }

    const personaldetails = useContext(PersonalDetailsContext);
    if (!personaldetails) {
        console.log("Something went wrong when loading Personal Details Context");
        return null;
    };
    const { name, surname, address, phone, email, role, summary, linkedin, github } = personaldetails;

    const educationContext = useContext(EducationFunctionContext);
    if (!educationContext) {
        console.log("Something went wrong when loading Education Context");
        return null;
    }
    const {educationEntries} = educationContext;

    const experienceContext = useContext(ExperienceContext);
    if (!experienceContext) {
        console.log("Something went wrong when loading Experience Context");
        return null;
    }
    const { experienceEntries } = experienceContext;

    const projectContext = useContext(ProjectContext);
    if (!projectContext) {
        console.log("Something went wrong when loading Project Context");
        return null;
    }
    const { projectEntries } = projectContext;

    const certificationContext = useContext(CertificationContext);
    if (!certificationContext) {
        console.log("Something went wrong when loading Certification Context");
        return null;
    }
    const { CertificationEntries } = certificationContext;

    const referenceContext = useContext(ReferenceContext);
    if (!referenceContext) {
        console.log("Something went wrong when loading Reference Context");
        return null;
    }
    const { referenceEntries } = referenceContext;

    const technicalSkillContext = useContext(TechnicalSkillsContext);
    if (!technicalSkillContext) {
        console.log("Something went wrong when loading Technical Skills Context");
        return null;
    }
    const { TechnicalSkillEntries } = technicalSkillContext;

    const achievementContext = useContext(AchievementContext);
    if (!achievementContext) {
        console.log("Something went wrong when loading Achievement Context");
        return null;
    }
    const { AchievementEntries } = achievementContext;

    const softSkillContext = useContext(SoftSkillContext);
    if (!softSkillContext) {
        console.log("Something went wrong when loading Soft Skills Context");
        return null;
    }
    const {softSkillEntries} = softSkillContext;

    // Combine all the data into a single object

    const allData = {
        template: localStorage.getItem('template')?.toLowerCase() || "template-one",
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
    
    // Effect to check authentication state and set username
    useEffect (() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, you can access user details
                setUsername(user.displayName || "User");
            } else {
                // User is signed out
                setUsername("Guest");
            }
        });
    }, []);

    // Function to handle the download button click
    const onDownloadButtonClick = () => {

        // Set download status to true, signalling the start of the server request
        setDownloadStatus(true);
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
            
            //Set downlaod status to false, signalling completion of the server request
            setDownloadStatus(false);

            if (window.confirm("Do you want to save your data?")) {
                saveToLocalStorage();
                alert("Your data has been saved. You can resume later.");
            } else {
                alert("Your data has not been saved. You can fill it again next time.");
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('There was an issue generating your resume.');

            //Set downlaod status to false, signalling completion of the server request
            setDownloadStatus(false);
        });
    }

    //Function to save all input values to local storage
    const saveToLocalStorage = () => {
        localStorage.removeItem('resume-data');
        localStorage.removeItem('template');

        // Save all data to local storage
        localStorage.setItem('template', allData.template);
        localStorage.setItem('resume-data', JSON.stringify(allData.userDetails));
    }

    const save = () => {
        saveToLocalStorage();
        alert("Your data has been saved. You can resume later.");
    }


    // Call saveToLocalStorage to ensure data is saved when the component mounts
    useEffect(() => {
        if(localStorage.getItem('resume-data') !== null){
            const savedData = JSON.parse(localStorage.getItem('resume-data') || '{}');
            personaldetails.setName(savedData.name || '');
            personaldetails.setSurname(savedData.surname || '');
            personaldetails.setAddress(savedData.address || '');
            personaldetails.setPhone(savedData.phone || '');
            personaldetails.setEmail(savedData.email || '');
            personaldetails.setRole(savedData.role || '');
            personaldetails.setSummary(savedData.summary || '');
            personaldetails.setLinkedin(savedData.linkedin || '');
            personaldetails.setGithub(savedData.github || '');

            achievementContext.setAchievementEntries(savedData.achievement || []);
            educationContext.setEducationEntries(savedData.education || []);
            experienceContext.setExperienceEntries(savedData.experience || []);
            projectContext.setProjectEntries(savedData.project || []);
            certificationContext.setCertificationEntries(savedData.certification || []);
            referenceContext.setReferenceEntries(savedData.reference || []);
            technicalSkillContext.setTechnicalSkillEntries(savedData.technicalSkills || []);
            softSkillContext.setSoftSKillEntries(savedData.softSkills || []);

        }
    }, []);

    return (
        <>
            <div className="banner">
                <h1>HiResume</h1>
               <div className="banner-btns">
                    <button className="save-btn" onClick={() => save()}>
                        Save
                        <img src={icons.save} alt="" />
                    </button>
                    <button className="download-btn"  onClick={()=> handleOpenGallery()}>
                        Template
                        <img src={icons.res_template} alt="" />
                    </button>
                    <button onClick={onDownloadButtonClick} className="download-btn" disabled = {downloadStatus}>
                        {
                            downloadStatus == false ? "Download" : "Downloading"
                        }
                        {
                            downloadStatus == false ?<img src={icons.download} alt="" /> :  <div className="loader"></div>
                        }
                    </button>
                    <button className="account-info">
                        {username}
                        <img src={icons.account} alt="" />
                    </button>
               </div>
               
            </div>
            <Suspense fallback = {<LoadingFallback/>}>
                <DetailForm/>
            </Suspense>
        </>
    )
}


export default Home;