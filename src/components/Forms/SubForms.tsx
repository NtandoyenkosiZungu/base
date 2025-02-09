import { useContext, useState } from "react";
import { PersonalDetailsContext } from "../../Contexts/PersonalDetailsContext";
import {EducationFunctionContext} from "../../Contexts/EducationContext";
import { ExperienceContext } from "../../Contexts/ExperienceContext";
import { Education, Experience, Project, References, Dropdown } from "./SubFormComponents";
import { ProjectContext } from "../../Contexts/ProjectContext";
import { ReferenceContext } from "../../Contexts/ReferenceContext";


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
        <button className="btn-add-entry" onClick={addEducationEntry}>Add Education Entry</button>
    </Dropdown>
  );
};
export const PersonalDetails: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const context = useContext(PersonalDetailsContext);

  if (!context){
    return null; // Return early if no context is available.
  }

  const { name, setName, surname, setSurname, email, setEmail, phone, setPhone, address, setAddress} = context;
  

  const toogleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="dropdown">
        <button className="btn-add-entry" onClick={toogleDropdown}>Personal Details</button>
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
            <label htmlFor="address">Address</label>
            <input type="text" name="address" id="address" value={address} onChange={e => setAddress(e.target.value)}/>
          </span>
          <span>
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" name="dob" id="dob" />
          </span>
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
      <button className="btn-add-entry" onClick={addExperienceEntry}>Add Experience Entry</button>
    </Dropdown>
  )
}


export const ProjectDetails : React.FC = () => {
  const context = useContext(ProjectContext);

  if (!context) return null;
  const {projectEntries, updateProjectEntry, removeProjectEntry, addProjectEntry} = context;

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
            tools={entry.tools}
            updateProjectEntry={updateProjectEntry}
            removeProjectEntry={removeProjectEntry}
          />
        )
      }
      <button className="btn-add-entry" onClick={addProjectEntry}>Add Project Entry</button>
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
      <button className="btn-add-entry"  onClick={addReferenceEntry} style={{width: '95%', alignSelf: 'center'}}>Add Reference Entry</button>
    </Dropdown>
  )
}