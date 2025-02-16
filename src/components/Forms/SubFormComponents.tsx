import {useState, useRef } from "react";
import { EducationEntry } from "../../Contexts/EducationContext";
import { ExperienceEntry } from "../../Contexts/ExperienceContext";
import { ProjectEntry } from "../../Contexts/ProjectContext";
import {ReferenceEntry } from "../../Contexts/ReferenceContext";
import { AchievementEntry } from "../../Contexts/Achievements";




interface DropdownProps {
  title: string;
  children: React.ReactNode;
}

export const Dropdown: React.FC<DropdownProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown}>{title}</button>
      <div className={`dropdown-content ${isOpen ? "show" : ""}`} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {children}
      </div>
    </div>
  );
};

interface DropdownContentProps {
  title: string;
  index: number;
  removeEntry: (index: number)=> void
  children: React.ReactNode;

}

const DropdownContent: React.FC<DropdownContentProps> = ({ title, children, index, removeEntry }) =>{
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown" style={{alignSelf: 'center'}}>
      <div className="btn-container">
        <button onClick={toggleDropdown}>{title}</button>
        <button className="btn-delete" onClick={()=>{ if (window.confirm("Are you sure you want to remove this entry?")) removeEntry(index) }} >
          Delete
        </button>
      </div>
      <div className={`dropdown-content ${isOpen ? "show" : ""}`}>
        {children}
      </div>
    </div>
  );
}

const DropdownContent2: React.FC<DropdownContentProps> = ({ title, children, index, removeEntry }) =>{
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="dropdown" style={{alignSelf: 'center'}}>
      <div className="btn-container">
        <button onClick={toggleDropdown}>{title}</button>
        <button className="btn-delete" onClick={()=>{ if (window.confirm("Are you sure you want to remove this entry?")) removeEntry(index) }} >
          Delete
        </button>
      </div>
      <div className={`dropdown-content-v2 ${isOpen? "show" : ""}`}>
        {children}
      </div>
    </div>
  )
}


interface educationProps {
  institution: string;
  location: string;
  level: string;
  field: string;
  start_date: string;
  end_date: string;
  index: number;

  updateEducationEntry: (index:number, field: keyof EducationEntry, value: string) => void;
  removeEducationEntry: (index:number)=> void;
}

export const Education: React.FC<educationProps> = ({institution, location, level, field, start_date, end_date, index, updateEducationEntry, removeEducationEntry}) => {
  return (
      <DropdownContent title={institution.length > 0 ? institution : 'Institution'} index={index} removeEntry={removeEducationEntry}>
        <span>
          <label htmlFor="institution">Institution</label>
          <input type="text" name="institution" id="institution"  value={institution} onChange={(e)=> updateEducationEntry(index, 'institution', e.target.value)}/>
        </span>
        <span>
          <label htmlFor="location">Location</label>
          <input type="text" name="location" id="location" value={location} onChange={(e) => updateEducationEntry(index, 'location', e.target.value)}/>
        </span>
        <span>
          <label htmlFor="level">Level</label>
          <input type="text" name="level" id="level" value={level} onChange={(e)=> updateEducationEntry(index, 'level', e.target.value)} />
        </span>
        <span>
          <label htmlFor="study">Field Of Study</label>
          <input type="text" name="study" id="study" value={field} onChange={(e)=> updateEducationEntry(index, 'field', e.target.value)}/>
        </span>
        <span>
          <label htmlFor="start-date">Start Date</label>
          <input type="text" name="start-date" id="start-date" value={start_date} onChange={(e)=> updateEducationEntry(index, 'start_date', e.target.value)}/>
        </span>
        <span>
          <label htmlFor="end-date">End Date</label>
          <input type="text" name="end-date" id="end-date" value={end_date} onChange={(e)=> updateEducationEntry(index, 'end_date', e.target.value)}/>
        </span>
      </DropdownContent>
  );
};

interface experienceProps {
  workplace: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  index: number;

  updateExperience: (index: number, field: keyof ExperienceEntry, value: string) => void;
  removeExperience: (index: number)=> void;
}

export const Experience : React.FC<experienceProps> =({workplace, role, startDate, endDate, index, description, updateExperience, removeExperience}) => {
  return (
    <DropdownContent2 title={workplace.length > 0? workplace : 'Company'} index={index} removeEntry={removeExperience}>
      <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px"}}>
        <span>
          <label htmlFor="workplace">Workplace</label>
          <input type="text" name="workplace" id="workplace" value={workplace} onChange={(e)=> updateExperience(index, 'workplace', e.target.value)}/>
        </span>
        <span>
          <label htmlFor="role">Role</label>
          <input type="text" name="role" id="role" value={role} onChange={(e)=> updateExperience(index, 'role', e.target.value)}/>
        </span>
        <span>
          <label htmlFor="start-date">Start Date</label>
          <input type="text" name="start-date" id="start-date" value={startDate} onChange={(e)=> updateExperience(index, 'startDate', e.target.value)}/>
        </span>
        <span>
          <label htmlFor="end-date">End Date</label>
          <input type="text" name="end-date" id="end-date" value={endDate} onChange={(e)=> updateExperience(index, 'endDate', e.target.value)}/>
        </span>
      </div>
      <span>
        <label htmlFor="project-description">Project Description</label>
        <textarea name="project-description" id="project-description" rows={3}  value={description} onChange={(e)=> updateExperience(index, 'description', e.target.value)}/>
      </span>
    </DropdownContent2>
  )
}

interface ProjectProps {
  project: string;
  link: string;
  description: string;
  index: number;

  updateProjectEntry: (index : number, field: keyof ProjectEntry, value: string) => void;
  removeProjectEntry: (index : number) => void;
  addTool: (index: number, tool: string) => void;
  removeTool: (index: number) => void;
}

export const Project : React.FC<ProjectProps> = ({project, link, description, index, updateProjectEntry, removeProjectEntry, addTool, removeTool}) => {
  const toolRef = useRef<HTMLInputElement>(null);

  return (
    <DropdownContent2 title={project.length > 0? project : 'Project Name'} index={index} removeEntry={removeProjectEntry}>
      <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px"}}>
        <span>
          <label htmlFor="project-name">Project Name</label>
          <input type="text" name="project-name" id="project-name" value={project} onChange={(e)=> updateProjectEntry(index, 'project', e.target.value)}/>
        </span>
        <span>
          <label htmlFor="project-link">Project Link</label>
          <input type="text" name="project-link" id="project-link" value={link} onChange={(e)=> updateProjectEntry(index, 'link', e.target.value)}/>
        </span>
      </div>

     <div style={{display: "grid", gridTemplateColumns: "68% 14% 14%", gap: "2%"}}>
      <span>
        <label htmlFor="project-tools">Tools Used</label>
        <input type="text" name="project-tools" id="project-tools" ref={toolRef}/>
      </span>
      <button style={{height:"30px", alignSelf: 'center', marginTop: '4px'}}
        onClick={()=> {
          addTool(index, toolRef.current?.value || '')
          toolRef.current!.value = ''
        }}
      >
        Add
      </button>

      <button style={{height:"30px", alignSelf: 'center', marginTop: '4px'}}
        onClick={()=> removeTool(index)}
      >
        Remove
      </button>
     </div>

      <span>
        <label htmlFor="project-description">Project Description</label>
        <textarea name="project-description" id="project-description" rows={3}  value={description} onChange={(e)=> updateProjectEntry(index, 'description', e.target.value)}/>
      </span>
    </DropdownContent2>
  )
}


interface ReferenceProps {
  reference: string;
  role: string;
  workplace: string;
  email: string;
  phone: string;
  index: number;

  updateReferenceEntry: (index : number, field: keyof ReferenceEntry, value: string) => void;
  removeReferenceEntry: (index : number) => void;
}

export const References : React.FC<ReferenceProps> = ({reference, role, workplace, email, phone, index, updateReferenceEntry, removeReferenceEntry}) => {
 
  return (
    <DropdownContent title={reference.length > 0? reference : 'Reference Name'} index={index} removeEntry={removeReferenceEntry}>
      <span>
        <label htmlFor="reference-name">Reference Name</label>
        <input type="text" name="reference-name" id="reference-name" value={reference} onChange={(e)=> updateReferenceEntry(index,'reference', e.target.value)}/>
      </span>
      <span>
        <label htmlFor="reference-role">Role</label>
        <input type="text" name="reference-role" id="reference-role" value={role} onChange={(e)=> updateReferenceEntry(index, 'role', e.target.value)}/>
      </span>
      <span>
        <label htmlFor="reference-workplace">Workplace</label>
        <input type="text" name="reference-workplace" id="reference-workplace" value={workplace} onChange={(e)=> updateReferenceEntry(index, 'workplace', e.target.value)}/>
      </span>
      <span>
        <label htmlFor="reference-email">Email</label>
        <input type="text" name="reference-email" id="reference-email" value={email} onChange={(e)=> updateReferenceEntry(index, 'email', e.target.value)}/>
      </span>
      <span>
        <label htmlFor="reference-phone">Phone</label>
        <input type="text" name="reference-phone" id="reference-phone" value={phone} onChange={(e)=> updateReferenceEntry(index, 'phone', e.target.value)}/>
      </span>
    </DropdownContent>
  )
}

interface AchiementProps {
  title: string;
  provider: string;
  date: string;
  index: number;

  updateAchievementEntry: (index: number, field: keyof AchievementEntry, value: string) => void;
  removeAchievementEntry: (index: number) => void;
}

export const Achievement: React.FC<AchiementProps> = ({title, provider, date, index, updateAchievementEntry, removeAchievementEntry}) => {
  return (
    <DropdownContent title={title.length > 0? title : 'Achievement Title'} index={index} removeEntry={removeAchievementEntry}>
      <span>
        <label htmlFor="achievement-title">Achievement Title</label>
        <input type="text" name="achievement-title" id="achievement-title" value={title} onChange={(e)=> updateAchievementEntry(index, 'title', e.target.value)}/>
      </span>
      <span>
        <label htmlFor="achievement-provider">Provider</label>
        <input type="text" name="achievement-provider" id="achievement-provider" value={provider} onChange={(e)=> updateAchievementEntry(index, 'provider', e.target.value)}/>
      </span>
      <span>
        <label htmlFor="achievement-date">Date</label>
        <input type="text" name="achievement-date" id="achievement-date" value={date} onChange={(e)=> updateAchievementEntry(index, 'date', e.target.value)}/>
      </span>
      <span>
        <label htmlFor="achievement-link">Link</label>
        <input type="text" name="achievement-link" id="achievement-link" />
      </span>
    </DropdownContent>
  )
}