import '../../assets/template-styles/template-four.css'

import React, { useContext } from 'react'
import { PersonalDetailsContext } from '../../Contexts/PersonalDetailsContext';
import { EducationFunctionContext } from '../../Contexts/EducationContext';
import { ExperienceContext } from '../../Contexts/ExperienceContext';
import { ProjectContext } from '../../Contexts/ProjectContext';
import { CertificationContext } from '../../Contexts/CertificationContext';
import { SoftSkillContext } from '../../Contexts/SoftSkillsContext';
import { TechnicalSkillsContext } from '../../Contexts/TechnicalSkillsContext';
import { icons } from '../Extra/icons';





export const TemplateFour: React.FC = () => {

    const personalContext = useContext(PersonalDetailsContext);
    if (!personalContext) return null;
    const {name, surname, address, phone, email, role, summary, linkedin, github} = personalContext;

    const educationContext = useContext(EducationFunctionContext);
    if (!educationContext) return null;
    const {educationEntries} = educationContext;

    const experienceContext = useContext(ExperienceContext);
    if (!experienceContext) return null;
    const {experienceEntries} = experienceContext;  

    const projectContext = useContext(ProjectContext);
    if (!projectContext) return null;
    const {projectEntries} = projectContext;

    const certificationContext = useContext(CertificationContext);  
    if (!certificationContext) return null;
    const {CertificationEntries} = certificationContext;

    const softSkillContext = useContext(SoftSkillContext);
    if (!softSkillContext) return null;
    const {softSkillEntries} = softSkillContext;

    const technicalSkillContext = useContext(TechnicalSkillsContext);
    if (!technicalSkillContext) return null;
    const {TechnicalSkillEntries} = technicalSkillContext;

    return (
        <div className='template-four' id='cv-template'>
            <section className='template-four-header'>
                <h1>{name} {surname}</h1>
                <h3>{role}</h3>
            </section>
            <section className='template-four-body-personal-details'>
                <div className='template-four-body-personal-details-left'>
                    <h3>Contact Details</h3>
                    <p className={address.length > 0 ? 'visible': 'none-display'}>
                        <img src={icons.location} alt="location" />
                        <span>{address}</span>
                    </p>
                    <p className={phone.length > 0 ? 'visible': 'none-display'}>
                        <img src={icons.phone} alt="phone" />
                        <a href={`tel:${phone}`} target='_blank' rel='noopener noreferrer' style={{color: '#2D2C2C', cursor: 'pointer'}}>{phone}</a>
                    </p>
                    <p className={email.length > 0 ? 'visible': 'none-display'}>
                        <img src={icons.email} alt="email" />
                        <a href={`mailto:${email}`} target='_blank' rel='noopener noreferrer' style={{color: '#2D2C2C', cursor: 'pointer'}}>{email}</a>
                    </p>
                    <p className={linkedin.length > 0 ? 'visible': 'none-display'}>
                        <img src={icons.linkedin} alt="linkedin" />
                        <a href={linkedin} target='_blank' rel='noopener noreferrer' style={{color: '#2D2C2C', cursor: 'pointer'}}>{linkedin}</a>
                    </p>
                    <p className={github.length > 0 ? 'visible': 'none-display'}>
                        <img src={icons.github} alt="github" />
                        <a href={github} target='_blank' rel='noopener noreferrer' style={{color: '#2D2C2C', cursor: 'pointer'}}>{github}</a>
                    </p>
                </div>
                <div className='template-four-body-personal-details-right'>
                    <h3>Summary</h3>
                    <pre>
                        {summary}
                    </pre>
                </div>
            </section>

            <section className='template-four-body-education'>
                <div className='template-four-body-education-left'>
                    <section className={educationEntries.length > 0 ? 'holder': 'none-display'}>
                        <h3>Education</h3>
                        {
                            educationEntries.map((entry, index) => (
                                <div key={index}>
                                    <h4>{entry.institution}</h4>
                                    <p className='visible'>
                                        <i>{entry.start_date} - {entry.end_date}</i>
                                    </p>
                                    <p className='visible'>
                                        <i>{entry.level} in {entry.field}</i>
                                    </p>
                                </div>
                            ))
                        }
                    </section>

                    <section className={CertificationEntries.length > 0 ? 'holder': 'none-display'}>
                        <h3>Certifications</h3>
                        {
                            CertificationEntries.map((entry, index) => (
                                <div key={index}>
                                    <h4>{entry.provider}</h4>
                                    <p className='visible'>
                                        <i>{entry.title}</i>
                                    </p>
                                    <p className='visible'>
                                        <i>{entry.date}</i>
                                    </p>
                                </div>
                            ))
                        }
                    </section>

                    <section className={TechnicalSkillEntries.length > 0 ? 'holder': 'none-display'}>
                        <h3>Technical Skills</h3>
                        {
                           TechnicalSkillEntries.map((entry, index) => (
                            <div key={index} dangerouslySetInnerHTML={{__html: entry.skill}}></div>
                           ))
                        }
                    </section>

                    <section className={softSkillEntries.length > 0 ? 'holder': 'none-display'}>
                        <h3>Soft Skills</h3>
                        {
                            softSkillEntries.map((entry, index) => (
                                <div key={index} dangerouslySetInnerHTML={{__html: entry.skill}}></div>
                            ))
                        }
                    </section>
                </div>
                <div className='template-four-body-education-right'>
                    <section className={experienceEntries.length > 0 ? 'holder': 'none-display'}>
                        <h3>Experience</h3>
                        {
                            experienceEntries.map((entry, index) => (
                                <div key={index}>
                                    <h4>{entry.workplace} | {entry.role}</h4>
                                    <p className='visible'>{entry.startDate} - {entry.endDate}</p>
                                    <div dangerouslySetInnerHTML={{__html: entry.description}}></div>
                                </div>
                            ))
                        }
                    </section>
                    <section className={projectEntries.length > 0 ? 'holder': 'none-display'}>
                        <h3>Projects</h3>
                        {
                            projectEntries.map((entry, index) => (
                                <div key={index}>
                                    <h4 className='visible'>{entry.project} | <a href={entry.link} target='_blank' rel='noopener noreferrer' style={{color: '#2D2C2C', cursor: 'pointer'}}>LINK</a></h4>
                                    <div dangerouslySetInnerHTML={{__html: entry.description}}></div>
                                </div>
                            ))
                        }
                    </section>
                    
                </div>
            </section>
        </div>
    )
    
    

}

