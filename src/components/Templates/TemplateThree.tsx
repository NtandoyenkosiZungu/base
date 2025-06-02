import '../../assets/template-styles/template-three.css';

import React, { useContext } from 'react';
import { PersonalDetailsContext } from '../../Contexts/PersonalDetailsContext';
import { EducationFunctionContext } from '../../Contexts/EducationContext';
import { ExperienceContext } from '../../Contexts/ExperienceContext';
import { TechnicalSkillsContext } from '../../Contexts/TechnicalSkillsContext';
import { AchievementContext } from '../../Contexts/AchievementContext';
import { CertificationContext } from '../../Contexts/CertificationContext';
import { ProjectContext } from '../../Contexts/ProjectContext';
import { SoftSkillContext } from '../../Contexts/SoftSkillsContext';
import { ReferenceContext } from '../../Contexts/ReferenceContext';
import { icons } from '../Extra/icons';

const TemplateThree: React.FC = () => {
    // Retrieve data from contexts
    const personalContext = useContext(PersonalDetailsContext);
    if (!personalContext) return null;
    const { name, surname, address, phone, email, summary, linkedin, github } = personalContext;

    const educationContext = useContext(EducationFunctionContext);
    if (!educationContext) return null;
    const { educationEntries } = educationContext;

    const experienceContext = useContext(ExperienceContext);
    if (!experienceContext) return null;
    const { experienceEntries } = experienceContext;

    const technicalSkillContext = useContext(TechnicalSkillsContext);
    if (!technicalSkillContext) return null;
    const { TechnicalSkillEntries } = technicalSkillContext;

    const softSkillContext = useContext(SoftSkillContext);
    if (!softSkillContext) return null;
    const { softSkillEntries } = softSkillContext;

    const achievementContext = useContext(AchievementContext);
    if (!achievementContext) return null;
    const { AchievementEntries } = achievementContext;

    const certificationContext = useContext(CertificationContext)
    if (!certificationContext) return null;
    const { CertificationEntries } = certificationContext;

    const projectContext = useContext(ProjectContext);
    if (!projectContext) return null;
    const { projectEntries } = projectContext;

    const referenceContext = useContext(ReferenceContext);
    if (!referenceContext) return null;
    const { referenceEntries } = referenceContext;


    return (
        <div className="res-three" id="cv-template">
           <header className="res-three-header">
                <h1>{name || "Name"} {surname || "Surname"}</h1>
                <p> 
                    <div className={address ? 'visible' : 'none-display'}><img src={icons.location} alt="location" /> {address}</div>
                    <b className={address ? 'visible' : 'none-display'}>|</b>
                    <div className={phone ? 'visible' : 'none-display'}><img src={icons.phone} alt="phone" /> <a href={"tel:"+phone} target="_blank" rel="noopener noreferrer" style={{color: '#333'}}>{phone}</a></div>
                    <b className={phone ? 'visible' : 'none-display'}>|</b>
                    <div className={email ? 'visible' : 'none-display'}><img src={icons.email} alt="email" /> <a href={"mailto:"+email} target="_blank" rel="noopener noreferrer" style={{color: '#333'}}>{email}</a>
                    </div> <b className={linkedin || github ? 'visible' : 'none-display'}>|</b>
                    <div className={linkedin ? 'visible' : 'none-display'}><img src={icons.linkedin} alt="linkedin" /> <a href={linkedin} target="_blank" rel="noopener noreferrer" style={{color: '#333'}}>{linkedin}</a>
                    </div><b className={github ? 'visible' : 'none-display'}>|</b>
                    <div className={github ? 'visible' : 'none-display'}><img src={icons.github} alt="github" /> <a href={github} target="_blank" rel="noopener noreferrer" style={{color: '#333'}}>{github}</a></div>
                </p>
           </header>

           <section className={summary.length > 0 ? 'res-three-summary': 'none-display'}>
                <h3>Summary <div></div></h3>
                <p>
                    {summary}
                </p>
           </section>
           <section className={educationEntries.length > 0 ? "res-three-section" : "none-display"}>
                <h3>Education <div></div></h3>
                {educationEntries.map((entry, index) => (
                    <div key={index} className="res-three-education-item" style={{marginTop: '-4%', paddingBottom:'2%'}}>   
                        <span>
                            <p className='institution'>{entry.institution}</p>
                            <p className='duration'>{entry.start_date} - {entry.end_date}</p>
                        </span>
                        <p style={{marginTop:'-2%'}}>{entry.level} in {entry.field}</p>
                    </div>
                ))}
            </section>
            <section className={experienceEntries.length > 0? "res-three-section" : "none-display"}>
                <h3>Experience <div></div></h3>
                {
                    experienceEntries.map((entry, index)=>
                        <div key={index} className="res-three-education-item" style={{marginTop: '-4%', paddingBottom:'2%'}}>   
                            <span>
                                <p>
                                    <b>{entry.workplace}</b> | {entry.role}
                                </p>
                                <p className='duration'>{entry.startDate} - {entry.endDate}</p>
                            </span>
                            <div className='description' dangerouslySetInnerHTML={{__html: entry.description}}></div>
                        </div>
                    )
                }
            </section>
            <section className={CertificationEntries.length > 0 ? "res-three-section" : "none-display"}>
                <h3 style={{paddingBottom: '1%'}}>Certifications <div></div></h3>
                {
                    CertificationEntries.map((entry, index) => 
                        <div key={index} className="res-three-certification-item" style={{marginTop: '-5%', paddingBottom:'1%'}}>   
                            <span>
                                <p>
                                    <b>{entry.provider}</b> | {entry.title}
                                </p>
                                <p className='duration'> {entry.date}</p>
                            </span>
                        </div>
                    )
                }
            </section>
            <section className={projectEntries.length > 0 ? "res-three-section" : "none-display"}>
                <h3>Projects <div></div></h3>
                {
                    projectEntries.map((entry, index) => 
                        <div key={index} className="res-three-project-item" style={{marginTop: '-1%', paddingBottom:'1%'}}>   
                            <span>
                                <p>
                                    <b>{entry.project}</b> <span className={entry.link.length > 0 ? "" : "none-display"} >|</span> <a href={entry.link} target="_blank" rel="noopener noreferrer" className={entry.link.length > 0 ? "" : "none-display"}><b>LINK</b></a>
                                </p>
                            </span>
                            <div className='description' dangerouslySetInnerHTML={{__html: entry.description}}></div>
                        </div>
                    )
                }
            </section>
            <section className={TechnicalSkillEntries.length > 0 ? "res-three-section" : "none-display"}>
                <h3>Technical Skills <div></div></h3>
                {TechnicalSkillEntries.map((entry, index) => (
                    <div key={index} className="res-three-list-item">
                        <div className='description' dangerouslySetInnerHTML={{__html: entry.skill}}></div>
                    </div>
                ))}
            </section>
            <section className={softSkillEntries.length > 0 ? "res-three-section" : "none-display"}>
                <h3>Soft Skills <div></div></h3>
                {softSkillEntries.map((entry, index) => (
                    <div key={index} className="res-three-list-item">
                        <div className='description' dangerouslySetInnerHTML={{__html: entry.skill}}></div>
                    </div>
                ))}
            </section>

            <section className={AchievementEntries.length > 0 ? "res-three-section" : "none-display"}>
                <h3>Achievements <div></div></h3>
                {AchievementEntries.map((entry, index) => (
                    <div key={index} className="res-three-list-item">
                        <div className='description' dangerouslySetInnerHTML={{__html: entry.achievement}}></div>
                    </div>
                ))}
            </section>

            <section className={referenceEntries.length > 0 ? "res-three-section" : "none-display"}>
                <h3>References <div></div></h3>
                {referenceEntries.map((entry, index) => (
                    <div key={index} className="res-three-references-item">
                        <span>
                            <span><b>{entry.reference}</b></span>
                            <p>{entry.role} at {entry.workplace}</p>
                            <p>{entry.phone} | {entry.email}</p>
                        </span>
                    </div>
                ))}
            </section>

        </div>
    );
};

export default TemplateThree;