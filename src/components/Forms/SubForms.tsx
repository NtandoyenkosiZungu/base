import { useContext, useState } from "react";
import { PersonalDetailsContext } from "../../Contexts/PersonalDetailsContext";
import {EducationFunctionContext} from "../../Contexts/ValueContexts";
import { ExperienceContext } from "../../Contexts/ExperienceContext";
import { Education } from "./SubFormComponents";


export const EducationDetails: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Retrieve the education functions context
  const func_context = useContext(EducationFunctionContext);

  if (!func_context) return null;

  const { educationEntries, updateEducationEntry, removeEducationEntry, addEducationEntry } = func_context;

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown}>Education Details</button>
      <div className={`dropdown-content ${isOpen ? "show" : ""}`} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "20px" }}>
        {educationEntries.map((entry, index) => (
          <Education
            key={index}
            index={index}  // Pass index to handle updates
            institution={entry.institution}
            location={entry.location}
            level={entry.level}
            field={entry.field}
            start_date={entry.start_date}
            end_date={entry.end_date}
            updateEducationEntry={updateEducationEntry}  // Pass function to handle updates
            removeEducationEntry={removeEducationEntry}  // Pass function to handle deletion
          />
        ))}
        <button style={{ width: "95%" }} onClick={addEducationEntry}>
          Add Entry
        </button>
      </div>
    </div>
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
        <button onClick={toogleDropdown}>Personal Details</button>
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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const context = useContext(ExperienceContext);

  if(!context){
    return null;
  }

  const {workplace, title, address, phone, startDate, endDate, setWorkplace, setTitle, setAddress,setPhone, setStartDate, setEndDate} = context;

  const toogleDropdown = () =>{
    setIsOpen(!isOpen);
  }
  return (
    <div className="dropdown">
      <button onClick={toogleDropdown}>Experience Details</button>
      <div className={`dropdown-content ${isOpen? 'show': ''}`}>
        <span>
          <label htmlFor="workplace">Workplace</label>
          <input type="text" name="workplace" id="workplace" value={workplace} onChange={e => setWorkplace(e.target.value)}/>
        </span>
        <span>
          <label htmlFor="title">Job Title</label>
          <input type="text" name="title" id="title" value={title} onChange={e => setTitle(e.target.value)}/>
        </span>
        <span>
          <label htmlFor="address">Address</label>
          <input type="text" name="address" id="address" value={address} onChange={(e => setAddress(e.target.value))}/>  
        </span>
        <span>
          <label htmlFor="phone">Telephone</label>
          <input type="text" name="phone" id="phone" value={phone} onChange={(e => setPhone(e.target.value))}/> 
        </span>
        <span>
          <label htmlFor="start-date">Start Date</label>
          <input type="text" name="start-date" id="start-date" value={startDate} onChange={e => setStartDate(e.target.value)}/>
        </span>
        <span>
          <label htmlFor="end-date">End Date</label>
          <input type="text" name="end-date" id="end-date" value={endDate} onChange={e => setEndDate(e.target.value)}/>
        </span>
      </div>
    </div>
  )
}

