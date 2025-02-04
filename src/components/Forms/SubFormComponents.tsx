import {useState } from "react";
import { EducationEntry } from "../../Contexts/EducationContext";
import { ExperienceEntry } from "../../Contexts/ExperienceContext";
import { ProjectEntry } from "../../Contexts/ProjectContext";

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
    const [isOpen, setIsOpen] = useState<boolean>(false);

  return (

    <div className="dropdown" style={{width:'95%'}}>
      <div className="btn-container">
        <button onClick={()=> setIsOpen(!isOpen)}>
          {institution.length > 0 ? institution: 'Institution Name'}
        </button>
        <button className="btn-delete" onClick={()=> removeEducationEntry(index)}>
          Remove
        </button>
      </div>
      <div className={`dropdown-content ${isOpen ? "show" : ""}`} style={{display:'grid', gridTemplateColumns: '45% 45%', gap: '10%', height: '200%'}}>
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
        <button onClick={()=> setIsOpen(false)}>
          Close
        </button>
      </div>
    </div>
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

export const Experience : React.FC<experienceProps> =({workplace, role, startDate, endDate, description, index, updateExperience, removeExperience}) => {
  const [isOpen, setIsOpen] = useState<boolean>();

  return (
    <div className="dropdown" style={{width: '95%'}}>
      <div className="btn-container">
        <button onClick={()=> setIsOpen(!isOpen)}>{workplace.length > 0 ? workplace: 'Workplace'}</button>
        <button className="btn-delete" onClick={()=> removeExperience(index)}>Delete</button>
      </div>
      <div className={`dropdown-content ${isOpen ? "show" : ""}`} style={{display:'grid', gridTemplateColumns: '45% 45%', gap: '10%', height: '200%'}}>
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
          <button onClick={()=> setIsOpen(false)}>
            Close
          </button>
      </div>
      
    </div>
  )
}

interface ProjectProps {
  project: string;
  link: string;
  tools: string;
  description: string;
  index: number;

  updateProjectEntry: (index : number, field: keyof ProjectEntry, value: string) => void;
  removeProjectEntry: (index : number) => void;
}

export const Project : React.FC<ProjectProps> = ({project, link, tools, description, index, updateProjectEntry, removeProjectEntry}) => {
  const [isOpen, setIsOpen] = useState<boolean>();

  return (
    <div className="dropdown">
      <div className="btn-container">
        <button onClick={()=> setIsOpen(!isOpen)}>{
          project.length > 0 ? project : 'Project Name'}
        </button>
        <button onClick={()=> removeProjectEntry}>
          Remove Entry
        </button>
      </div>
      <div className={`dropdown-content ${isOpen ? "show" : ""}`} style={{display:'grid', gridTemplateColumns: '45% 45%', gap: '10%', height: '200%'}}>
        <span>
          <span>
            <label htmlFor="project-name">Project Name</label>
            <input type="text" name="project-name" id="project-name" value={project} onChange={(e)=> updateProjectEntry(index, 'project', e.target.value)}/>
          </span>
          <span>
            <label htmlFor="project-link">Project Link</label>
            <input type="text" name="project-link" id="project-link" value={project} onChange={(e)=> updateProjectEntry(index, 'link', e.target.value)}/>
          </span>
        </span>
        <button onClick={()=> setIsOpen(false)}>
          Close
        </button>
      </div>
    </div>
  )
}