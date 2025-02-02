import {useState } from "react";
import { EducationEntry } from "../../Contexts/ValueContexts";

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
        <button onClick={()=> setIsOpen(!isOpen)}>
            {institution.length > 0 ? institution: 'Institution Name'}
        </button>
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

        <button onClick={()=> removeEducationEntry(index)}>
          Remove
        </button>
      </div>
    </div>
  );
};
