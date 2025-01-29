import '../../assets/template-styles/template-one.css'

import { useContext } from 'react'
import { PersonalDetailsContext } from '../../Contexts/PersonalDetailsContext';
import { EducationContext } from '../../Contexts/EducationContext';

export const TemplateOne: React.FC = () => {

    //RETRIEVING THE STATE OF PersonalDetails through the Context API
    const personalContext = useContext(PersonalDetailsContext);
    if (!personalContext) return null;
    const {name, surname, address, phone, email} = personalContext;

    const  educationContext= useContext(EducationContext);
    
    if (!educationContext) return null;
    const {institution, level, location, field, startDate, endDate} = educationContext;
 
    //FORMAT THE DURATION - Jan 2024 - Present or Jan 2024 - Dec 2024
    let duration = "Duration"
    if (endDate != 'Present') {
        duration = startDate.substring(0,3)+ startDate.substring(startDate.length-5) + ' - ' + endDate.substring(0,3) + endDate.substring(endDate.length-5);
    } else {
        duration = startDate.substring(0,3)+ startDate.substring(startDate.length-5) + ' - ' + endDate.substring(0,3) + endDate.substring(endDate.length-4);
    }
    return (
        <div className='res-one'>
            <div className="res-one-details">
                <span>
                    <p className='name'>{name + ' ' + surname}</p>
                    <p className='title'>Job Title</p>
                </span>
                <span>
                   <ul>
                    <li>{address.length > 0 ? address : 'City, Name, Zip'}</li>
                    <li>{phone.length > 0 ? phone : '123-456-7890'}</li>
                    <li>{email.length > 0 ? email: 'info@example.com'}</li>
                   </ul>
                </span>
            </div>
            <hr />
            <div className="res-one-education">
                <div className="heading">
                    EDUCATION
                </div>
                <div className='res-content'>
                    <span className='left-side'>
                        <p>{institution}</p>
                        <p className='last-child'>{level + ' ' + field}</p>
                    </span>
                    <span className='right-side'>
                        <p>{location}</p>
                        <p className='last-child'>{duration}</p>
                    </span>
                </div>
            </div>
            <hr />
            <div className="res-one-achievements">
                <div className="heading">
                    ACHIEVEMENTS
                </div>
                <div className="res-content">
                    <span className='left-side'>
                        <p>Achivement Name</p>
                    </span>
                    <span className='right-side'>
                        <p>Acquired Date</p>
                    </span>
                </div>
            </div>
            <hr />
            <div className="res-one-experience">
                <div className="heading">EXPERIENCE</div>
                <div className="res-content">
                    <span className='left-side'>
                        <p>Workplace</p>
                        <p className='last-child'>Duration</p>
                    </span>
                    <span className='right-side'>
                        <p>Workplace</p>
                        <p className='last-child'>Duration</p>
                    </span>
                </div>
                <div className="description">
                    <pre>Description</pre>
                </div>
            </div>
            <hr />
            <div className="res-one-projects">
                <div className="heading">
                    PROJECTS
                </div>
                <div className='res-content'>
                    <span className='left-side'>
                        <p>Project Name | <a href="#" target='_blank'>LINK</a></p>
                    </span>
                    <span className='right-side'>
                        <p>Date</p>
                    </span>
                </div>  
                <div className="description">
                    <pre>Description</pre>
                </div>
            </div>
            <hr />
            <div className="res-one-references">
                <div className="heading">
                    REFERENCES
                </div>
            </div>
        </div>
    )
}