import React, { useContext, useState } from "react";
import { PersonalDetailsContext } from "../../Contexts/PersonalDetailsContext";
import {EducationFunctionContext} from "../../Contexts/EducationContext";
import { ExperienceContext } from "../../Contexts/ExperienceContext";
import { Education, Experience, Project, References, Dropdown, Certification, Achievement, TechnicalSkill, SoftSkill } from "./SubFormComponents";
import { ProjectContext } from "../../Contexts/ProjectContext";
import { ReferenceContext } from "../../Contexts/ReferenceContext";
import { CertificationContext } from "../../Contexts/CertificationContext";
import { AchievementContext } from "../../Contexts/AchievementContext";
import { TechnicalSkillsContext } from "../../Contexts/TechnicalSkillsContext";
import { SoftSkillContext } from "../../Contexts/SoftSkillsContext";


export const EducationDetails: React.FC = () => {

  // Retrieve the education functions context
  const func_context = useContext(EducationFunctionContext);

  if (!func_context) return null;

  const { educationEntries, updateEducationEntry, removeEducationEntry, addEducationEntry } = func_context;

  return (
    <Dropdown title="Education Details">
        {
          educationEntries.map((entry, index) => (
            <Education
              key={index}
              institution={entry.institution}
              location={entry.location}
              level={entry.level}
              field={entry.field}
              start_date={entry.start_date}
              end_date={entry.end_date}
              index={index}
              updateEducationEntry={updateEducationEntry}
              removeEducationEntry={removeEducationEntry}
            />
          ))
        }
        <button className="button-6" onClick={addEducationEntry}>Add Education Entry</button>
    </Dropdown>
  );
};
export const PersonalDetails: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const context = useContext(PersonalDetailsContext);

  if (!context){
    return null; // Return early if no context is available.
  }

  const { name, setName, surname, setSurname, email, setEmail, phone, setPhone, address, setAddress, role, setRole, summary, setSummary, github, setGithub, linkedin, setLinkedin} = context;
  

  const toogleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="dropdown">
        <button className="button-30" onClick={toogleDropdown} >Personal Details</button>
        <div className={`dropdown-content ${isOpen ? "show" : ""}`}>
          <span>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" value={name} onChange={(e)=> setName(e.target.value)}/>
          </span>
          <span>
            <label htmlFor="surname">Surname</label>
            <input type="text" name="surname" id="surname" value={surname} onChange={e => setSurname(e.target.value)}/>
          </span>
          <span>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)}/>
          </span>
          <span>
            <label htmlFor="phone">Phone</label>
            <input type="tel" name="phone" id="phone" value={phone} onChange={e => setPhone(e.target.value)}/>
          </span>
          <span>
            <label htmlFor="linkedin">LinkedIn Username</label>
            <input type="text" name="linkedin" id="linkedin" value={linkedin} onChange={e => setLinkedin(e.target.value)}/>
          </span>
          <span>
            <label htmlFor="github">GitHub Username</label>
            <input type="text" name="github" id="github" value={github} onChange={e => setGithub(e.target.value)}/>
          </span>
          <span>
            <label htmlFor="address">Address</label>
            <input type="text" name="address" id="address" value={address} onChange={e => setAddress(e.target.value)}/>
          </span>
          <span>
            <label htmlFor="job-role">Role Inquiry</label>
            <input type="text" name="job-role" id="job-role" value={role} onChange={e => setRole(e.target.value)} />
          </span>
          <div>
            <label htmlFor="summary">Summary</label>
            <textarea name="summary" id="summary" style={{width: "195%", borderRadius: '5px', fontSize: "16px", paddingLeft: "5%", paddingRight: "5%"}} rows={5} value={summary} onChange={(e)=> setSummary(e.target.value)}></textarea>
          </div>
        </div>
      </div>
    </>
  );
}
export const ExperienceDetails: React.FC = () => {
  const context = useContext(ExperienceContext);

  if(!context){
    console.error("Failed to load context");
    return null;
  }

  const {experienceEntries, updateExperienceEntry, removeExperienceEntry, addExperienceEntry} = context;

  return (
    <Dropdown title="Experience Details">
      {
        experienceEntries.map((entry, index)=> 
          <Experience
            key={index}
            index={index}
            workplace={entry.workplace}
            role={entry.role}
            startDate={entry.startDate}
            endDate={entry.endDate}
            description={entry.description}
            updateExperience={updateExperienceEntry}
            removeExperience={removeExperienceEntry}
          />
        )
      }
      <button className="button-6" onClick={addExperienceEntry}>Add Experience Entry</button>
    </Dropdown>
  )
}


export const ProjectDetails : React.FC = () => {
  const context = useContext(ProjectContext);

  if (!context) return null;
  const {projectEntries, updateProjectEntry, removeProjectEntry, addProjectEntry, addTool, removeTool} = context;

  return (
    <Dropdown title="Project Details">
      {
        projectEntries.map((entry, index)=> 
          <Project
            key={index}
            index={index}
            project={entry.project}
            link={entry.link}
            description={entry.description}
            updateProjectEntry={updateProjectEntry}
            removeProjectEntry={removeProjectEntry}
            addTool={addTool}
            removeTool={removeTool}
          />
        )
      }
      <button className="button-6" onClick={addProjectEntry}>Add Project Entry</button>
    </Dropdown>
  )
}

export const ReferenceDetails : React.FC = () => {
  
  const context = useContext(ReferenceContext);
  
  if (!context) return null;
  const {referenceEntries, addReferenceEntry, updateReferenceEntry, removeReferenceEntry} = context;

  return (
    <Dropdown title="Reference Details">
      {
        referenceEntries.map((entry, index)=> 
          <References
            key={index}
            index={index}
            reference={entry.reference}
            role={entry.role}
            workplace={entry.workplace}
            phone={entry.phone}
            email={entry.email}
            updateReferenceEntry={updateReferenceEntry}
            removeReferenceEntry={removeReferenceEntry}
          />
        )
      }
      <button className="button-6"  onClick={addReferenceEntry} style={{width: '95%', alignSelf: 'center'}}>Add Reference Entry</button>
    </Dropdown>
  )
}


export const CertificationsDetails: React.FC = () => {
  const context = useContext(CertificationContext);
  if (!context) return null;

  const {CertificationEntries, addCertificationEntry, updateCertificationEntry, removeCertificationEntry} = context;
  return (
    <Dropdown title="Certification Details">
      {
        CertificationEntries.map((entry, index)=>
          <Certification
            key={index}
            index={index}
            title={entry.title}
            provider={entry.provider}
            date={entry.date}
            updateCertificationEntry={updateCertificationEntry}
            removeCertificationEntry={removeCertificationEntry}
          />
        )
      }
      <button className="button-6" onClick={addCertificationEntry}>Add Certification Entry</button>
    </Dropdown>
  )
}

export const AchievementDetails: React.FC = () => {
  const context = useContext(AchievementContext);
  if(!context) return null;

  const {AchievementEntries, addAchievementEntry, updateAchievementEntry, removeAchievementEntry } = context;

  return (
    <Dropdown title="Achievement">
      {
        AchievementEntries.map((entry, index) => 
          <Achievement 
              key={index}
              achievement={entry.achievement} 
              index={index}
              updateAchievementEntry={updateAchievementEntry}
              removeAchievementEntry={removeAchievementEntry}
            />
      )
      }
      <button className="button-6" onClick={addAchievementEntry}>Add Achievement Entry</button>
    </Dropdown>
  )
}

export const TechnicalSkillDetails: React.FC = () => {
  const context = useContext(TechnicalSkillsContext);

  if(!context) console.log("did not read");

  if(!context) return null; 

  const {addTechnicalSkillEntry, removeTechnicalSkillEntry, updateTechnicalSkillEntry, TechnicalSkillEntries} = context;
  return (
   <Dropdown title="Technical Skill">
        {
          TechnicalSkillEntries.map((entry, index) =>
            <TechnicalSkill 
              key={index}
              index={index}
              skill={entry.skill}
              updateSkillEntry={updateTechnicalSkillEntry}
              removeSkillEntry={removeTechnicalSkillEntry}
            />
          )
        }
      <button className="button-6" onClick={addTechnicalSkillEntry}>Add Technical Skill</button>
   </Dropdown>
  )
}

export const SoftSkillDetails: React.FC = () => {
  const context = useContext(SoftSkillContext);
  if (!context) return null;
  const {addSoftSkill, removeSoftSkill, updateSoftSkill, softSkillEntries} =context;
  return (
    <Dropdown title="Soft Skill">
      {
        softSkillEntries.map((entry, index)=> 
          <SoftSkill 
            key={index}
            index={index}
            skill={entry.skill}
            updateSkillEntry={updateSoftSkill}
            removeSkillEntry={removeSoftSkill}
          />
        )
      }
      <button className="button-6" onClick={addSoftSkill}>Add Soft Skill</button>
    </Dropdown>
  )
  
}