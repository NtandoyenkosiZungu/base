import '../../assets/template-styles/template-one.css'

import React, { useContext } from 'react'
import { PersonalDetailsContext } from '../../Contexts/PersonalDetailsContext';
import { EducationFunctionContext } from '../../Contexts/EducationContext';
import { ExperienceContext } from '../../Contexts/ExperienceContext';
import { ProjectContext } from '../../Contexts/ProjectContext';
import { CertificationContext } from '../../Contexts/CertificationContext';
import { ReferenceContext } from '../../Contexts/ReferenceContext';
import { TechnicalSkillsContext } from '../../Contexts/TechnicalSkillsContext';
import { AchievementContext } from '../../Contexts/AchievementContext';
import { SoftSkillContext } from '../../Contexts/SoftSkillsContext';
import { icons } from '../Extra/icons';
const TemplateOne: React.FC = () => {

    //RETRIEVING THE STATE OF PersonalDetails through the Context API
    const personalContext = useContext(PersonalDetailsContext);
    if (!personalContext) return null;
    const {name, surname, address, phone, email, role, summary, linkedin, github} = personalContext;

    const  educationContext= useContext(EducationFunctionContext);   
    if (!educationContext) return null;
    const {educationEntries} = educationContext;

    const experienceContext = useContext(ExperienceContext);
    if (!experienceContext) return null;
    const {experienceEntries} = experienceContext;

    const projectContext = useContext(ProjectContext)
    if (!projectContext) return null;
    const {projectEntries} = projectContext;

    const certificationContext = useContext(CertificationContext);
    if (!certificationContext) return null;
    const {CertificationEntries} = certificationContext;

    const referenceContext = useContext(ReferenceContext);
    if (!referenceContext) return null;
    const {referenceEntries} = referenceContext;

    const technicalSkillcontext = useContext(TechnicalSkillsContext);
    if(!technicalSkillcontext) return null;
    const {TechnicalSkillEntries} = technicalSkillcontext;

    const achievementContext = useContext(AchievementContext);
    if (!achievementContext) return null;
    const {AchievementEntries} = achievementContext;

    const softSkillContext = useContext(SoftSkillContext);
    if (!softSkillContext) return null;
    const {softSkillEntries} =softSkillContext;

    return (
        <div className='res-one' id="cv-template">
            <div className="res-one-details">
                <span>
                    <p className='name'>{name.length > 0 ? name + " " : "Name "} {surname.length > 0 ? surname: "Surname"}</p>
                    <p className='title'>{role.length > 0? role: "Job Title"}</p>
                </span>
                <span className='res-one-personal-details'>
                    <p className={address.length > 0 ? 'visible': 'none-display'}>
                        <img src={icons.location} alt="location" />
                        {address}
                    </p>
                    <p className={phone.length > 0 ? 'visible': 'none-display'}>
                        <img src={icons.phone} alt="phone" />
                        <a href={"tel:"+phone} target="_blank" rel="noopener noreferrer" style={{color: '#333'}}>{phone}</a>
                    </p>
                    <p className={email.length > 0 ? 'visible': 'none-display'}>
                        <img src={icons.email} alt="email" />
                        <a href={"mailto:"+email} target="_blank" rel="noopener noreferrer" style={{color: '#333'}}>{email}</a>
                    </p>
                    <p className={linkedin.length > 0 ? 'visible': 'none-display'}>
                        <img src={icons.linkedin} alt="linkedin" />
                        <a href={`${linkedin}`} target="_blank" rel="noopener noreferrer" style={{color: '#333'}}>{linkedin}</a>
                    </p>
                    <p className={github.length > 0 ? 'visible': 'none-display'}>
                        <img src={icons.github} alt="github" />
                        <a href={github} target="_blank" rel="noopener noreferrer" style={{color: '#333'}}>{github}</a>
                    </p>
                </span>
            </div>

            <hr   className={summary.length > 0 ? '':'none-display'}/>
            <div className={summary.length > 0 ? '':'none-display'}>
                <div className='heading'>
                    SUMMARY
                </div>
                <div>
                    <pre>
                        {summary}
                    </pre>
                </div>
            </div>

            <hr className={educationEntries.length > 0? "" : 'none-display'} />
            <div className={educationEntries.length > 0? "" : 'none-display'} >
            <div className="heading">
                EDUCATION
            </div>
                {educationEntries.map((entry, index) => (
                    <TemplateOneEducationDetails 
                        key={index}
                        institution={entry.institution}
                        level={entry.level}
                        field={entry.field}
                        location={entry.location}
                        startDate={entry.start_date}
                        endDate={entry.end_date}
                    />
                ))}
            </div>

            <hr className={experienceEntries.length > 0 ? "": "none-display"}/>

            <div className={experienceEntries.length > 0 ? "" : 'none-display'}>
                <div className="heading">EXPERIENCE</div>
                {
                    experienceEntries.map((entry, index)=> 
                        <TemplateOneExperienceDetails 
                            key={index}
                            workplace={entry.workplace}
                            role={entry.role}
                            startDate={entry.startDate}
                            endDate={entry.endDate}
                            description={entry.description}
                        />
                    )
                }
            </div>
            <hr className={CertificationEntries.length > 0 ? '' : 'none-display'} />

            <div className={CertificationEntries.length > 0 ? '' : 'none-display'}>
                <div className="heading">
                    CERTIFICATIONS
                </div>
                {
                    CertificationEntries.map((entry, index) => 
                        <TemplateOneCertificationDetails key={index}
                            title={entry.title}
                            provider={entry.provider}
                            date={entry.date}
                        />
                    )
                }
            </div>

            <hr className={TechnicalSkillEntries.length > 0 ? '' : 'none-display'} />
            <div className={TechnicalSkillEntries.length > 0 ? '' : 'none-display'}>
                <div className='heading'>
                    TECHNICAL SKILLS
                </div>
                <ul style={{marginLeft: "-5%"}}>
                    {
                        TechnicalSkillEntries.map((entry, index) => 
                            <div key={index} dangerouslySetInnerHTML={{__html: entry.skill}} />
                        )
                    }
                </ul>
            </div>

            <hr className={softSkillEntries.length > 0 ? '': 'none-display'}/>
            <div className={softSkillEntries.length > 0 ? '': 'none-display'}>
                <div className="heading">
                    SOFT SKILLS
                </div>
                <ul style={{marginLeft: "-5%"}}>
                    {
                        softSkillEntries.map((entry, index) =>
                            <div key={index} dangerouslySetInnerHTML={{__html: entry.skill}} />
                        )
                    }
                </ul>
            </div>

            <hr className={projectEntries.length > 0 ? "" : 'none-display'}/>

            <div className= {projectEntries.length > 0 ? "res-one-projects" : 'none-display'}>
                <div className="heading">
                    PROJECTS
                </div>
                {
                    projectEntries.map((entry, index) => 
                        <TemplateOneProjectDetails 
                            key={index}
                            project={entry.project}
                            link={entry.link}
                            tools={entry.tools}
                            description={entry.description}
                        />
                    )
                }
            </div>
            
            <hr className={AchievementEntries.length > 0? '': 'none-display'}/>
            <div className={AchievementEntries.length > 0? '': 'none-display'}>
                <div className='heading'>
                    ACHIEVEMENTS
                </div>
                <ul>
                {
                    AchievementEntries.map((entry,) => 
                        <div style={{marginLeft: '-5%'}} dangerouslySetInnerHTML={{__html: entry.achievement}} />
                    )
                }
                </ul>
            </div>


            <hr className={referenceEntries.length > 0 ?  '': 'none-display'}/>
            <div className={referenceEntries.length > 0 ?  '': 'none-display'}>
                <div className="heading">
                    REFERENCES
                </div>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem'}}>
                    {
                        referenceEntries.map((entry, index) => 
                            <TemplateOneReferenceDetails key={index}
                                reference={entry.reference}
                                role={entry.role}
                                workplace={entry.workplace}
                                phone={entry.phone}
                                email={entry.email}
                        />
                    )
                    }

                </div>
            </div>
        </div>
    )
}

export default TemplateOne;


interface educationprops{
    institution: string,
    location: string,
    level: string,
    field: string,
    startDate: string,
    endDate: string
}

const TemplateOneEducationDetails: React.FC<educationprops> = ({institution, location, level, field, startDate, endDate}) => {
    //FORMAT THE DURATION - Jan 2024 - Present or Jan 2024 - Dec 2024
    return (
        <>
            <div className='res-content'>
                <span className='left-side'>
                    <p>{institution}</p>
                    <p className='last-child'>{level + ' in ' + field}</p>
                </span>
                <span className='right-side'>
                    <p>{location}</p>
                    <p className='last-child'>{startDate} - {endDate}</p>
                </span>
            </div>
        </>
    )
}


interface experienceProps {
    workplace: string,
    role: string,
    startDate: string,
    endDate: string,
    description: string
}

const TemplateOneExperienceDetails: React.FC<experienceProps> = ({workplace,role, startDate, endDate, description}) => {
    //FORMAT THE DURATION - Jan 2024 - Present or Jan 2024 - Dec 2024

    return (
        <>
            <div className='res-content'>
                <span className='left-side'>
                    <p>{workplace}</p>
                    <p className='last-child'>{role}</p>
                </span>
                <span className='right-side'>
                    <p>{startDate} - {endDate}</p>
                </span>
            </div>
            <div className={description.length > 0 ? "description": 'none-display'} style={{marginTop: '0.5rem'}}>
                <div dangerouslySetInnerHTML={{__html: description}}/>
            </div>
        </>
    )
}


interface projectProps {
    project: string;
    link: string;
    tools: string[];
    description: string;
}

const TemplateOneProjectDetails: React.FC<projectProps> = ({project, link, tools, description}) => {
    return (
        <>
            <div className='res-content'>
                <span className='left-side'>
                    <p className='project-name'>{project} | <a href={link} target='_blank'  className={link.length > 0? '':'none-display'}>LINK</a></p>
                </span>
            </div>
            <div className={description.length > 0 ? "description": 'none-display'} style={{marginTop: '0.5rem'}}>
                <div dangerouslySetInnerHTML={{__html: description}} />
            </div>
            <div className={tools.length > 0? 'tools' : 'none-display'}>
                <span>Tools: </span>
                {
                    tools.map((tools, index) =>
                        <span key={index}>{tools} | </span>
                    )
                }
            </div>
        </>
    )
}


interface CertificationProps {
    title: string;
    provider: string;
    date: string;

}
const TemplateOneCertificationDetails: React.FC<CertificationProps> = ({title, provider, date}) => {
    return (
        <>
            <div className='res-content' style={{display:'grid', gridTemplateColumns: '1.5fr 1fr'}}>
                <span className='left-side'>
                    <p>{provider} | {title} </p>
                </span>
                <span className='right-side'>
                    <p>{date}</p>
                </span>
            </div>
        </>
    )
}



interface referenceProps {
    reference: string;
    role: string;
    workplace: string;
    phone: string;
    email: string;
}

const TemplateOneReferenceDetails: React.FC<referenceProps> = ({reference, role, workplace, phone, email}) => {
    return (
        <>
            <div style={{marginLeft: '0.5rem'}}>
                <span>
                    <p>
                        <u>
                            {reference}
                        </u>
                    </p>
                </span>
                <div style={{color:'#414141', fontSize: '0.9rem', marginTop: '-0.5rem'}}>    
                    <p>{workplace}/{role}</p>
                </div>
                <div>
                    <p><img src={icons.phone} alt="phone" />: <a href={"tel:"+phone} target="_blank" rel="noopener noreferrer" style={{color: '#333'}}>{phone}</a></p>
                    <p style={{marginTop:'-0.5rem'}}><img src={icons.email} alt="email"/>: <a href={"mailto:"+email} target="_blank" rel="noopener noreferrer" style={{color: '#333'}}>{email}</a></p>
                </div>
            </div>
        </>
    )
}