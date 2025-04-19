import '../../assets/template-styles/template-two.css';

import React, { useContext } from 'react';
import { PersonalDetailsContext } from '../../Contexts/PersonalDetailsContext';
import { EducationFunctionContext } from '../../Contexts/EducationContext';
import { ExperienceContext } from '../../Contexts/ExperienceContext';
import { ProjectContext } from '../../Contexts/ProjectContext';
import { CertificationContext } from '../../Contexts/CertificationContext';
import { ReferenceContext } from '../../Contexts/ReferenceContext';
import { TechnicalSkillsContext } from '../../Contexts/TechnicalSkillsContext';
import { AchievementContext } from '../../Contexts/AchievementContext';
import { SoftSkillContext } from '../../Contexts/SoftSkillsContext';

export const TemplateTwo: React.FC = () => {
    // Retrieve data from contexts
    const personalContext = useContext(PersonalDetailsContext);
    if (!personalContext) return null;
    const { name, surname, address, phone, email, role, summary } = personalContext;

    const educationContext = useContext(EducationFunctionContext);
    if (!educationContext) return null;
    const { educationEntries } = educationContext;

    const experienceContext = useContext(ExperienceContext);
    if (!experienceContext) return null;
    const { experienceEntries } = experienceContext;

    const projectContext = useContext(ProjectContext);
    if (!projectContext) return null;
    const { projectEntries } = projectContext;

    const certificationContext = useContext(CertificationContext);
    if (!certificationContext) return null;
    const { CertificationEntries } = certificationContext;

    const referenceContext = useContext(ReferenceContext);
    if (!referenceContext) return null;
    const { referenceEntries } = referenceContext;

    const technicalSkillContext = useContext(TechnicalSkillsContext);
    if (!technicalSkillContext) return null;
    const { TechnicalSkillEntries } = technicalSkillContext;

    const achievementContext = useContext(AchievementContext);
    if (!achievementContext) return null;
    const { AchievementEntries } = achievementContext;

    const softSkillContext = useContext(SoftSkillContext);
    if (!softSkillContext) return null;
    const { softSkillEntries } = softSkillContext;

    return (
        <div className="res-two" id="cv-template">
            <header className="res-two-header">
                <h1>{name || "Name"} {surname || "Surname"}</h1>
                <h2>{role || "Job Title"}</h2>
                <p>{address || "City, State, Zip"} | {phone || "123-456-7890"} | <a href={"mailto:"+email} style={{color: 'grey'}}>{email || "info@example.com"}</a></p>
            </header>

            <section className={summary ? "res-two-section" : "none-display"}>
                <h3>Summary</h3>
                <p>{summary}</p>
            </section>

            <section className={educationEntries.length > 0 ? "res-two-section" : "none-display"}>
                <h3>Education</h3>
                {educationEntries.map((entry, index) => (
                    <div key={index} className="res-two-item">
                        <h4>{entry.institution}</h4>
                        <p>{entry.level} in {entry.field}</p>
                        <p>{entry.start_date} - {entry.end_date}</p>
                    </div>
                ))}
            </section>

            <section className={experienceEntries.length > 0 ? "res-two-section" : "none-display"}>
                <h3>Experience</h3>
                {experienceEntries.map((entry, index) => (
                    <div key={index} className="res-two-item">
                        <h4>{entry.workplace}</h4>
                        <p>{entry.role}</p>
                        <p>{entry.startDate} - {entry.endDate}</p>
                        <div className='description' dangerouslySetInnerHTML={{__html: entry.description}}></div>
                    </div>
                ))}
            </section>

            <section className={TechnicalSkillEntries.length > 0 ? "res-two-section" : "none-display"}>
                <h3>Technical Skills</h3>
                <ul>
                    {TechnicalSkillEntries.map((entry, index) => (
                        <li key={index}>{entry.skill}</li>
                    ))}
                </ul>
            </section>

            <section className={softSkillEntries.length > 0 ? "res-two-section" : "none-display"}>
                <h3>Soft Skills</h3>
                <ul>
                    {softSkillEntries.map((entry, index) => (
                        <li key={index}>{entry.skill}</li>
                    ))}
                </ul>
            </section>

            <section className={projectEntries.length > 0 ? "res-two-section" : "none-display"}>
                <h3>Projects</h3>
                {projectEntries.map((entry, index) => (
                    <div key={index} className="res-two-item">
                        <span className='project-heading'>
                            <h4> {entry.project}</h4>

                            <strong className={entry.link.length > 0? '': 'none-display'}>|</strong>

                            <h4>
                                <a href={entry.link} className={entry.link.length > 0? '': 'none-display'} target="_blank"  rel="noopener noreferrer">LINK</a>
                            </h4>
                        </span>
                        <div dangerouslySetInnerHTML={{__html: entry.description}}></div>
                    </div>
                ))}
            </section>

            <section className={CertificationEntries.length > 0 ? "res-two-section" : "none-display"}>
                <h3>Certifications</h3>
                {CertificationEntries.map((entry, index) => (
                    <div key={index} className="res-two-item">
                        <span>
                            <p><strong>{entry.provider} </strong>| {entry.title}</p>
                        </span>
                        <p style={{marginTop: '-3%'}}>{entry.date}</p>
                    </div>
                ))}
            </section>


            <section className={AchievementEntries.length > 0 ? "res-two-section" : "none-display"}>
                <h3>Achievements</h3>
                    {AchievementEntries.map((entry) => (
                        <div dangerouslySetInnerHTML={{__html: entry.achievement}} />
                    ))}
            </section>

            <section className={referenceEntries.length > 0 ? "res-two-section" : "none-display"}>
                <h3>References</h3>
                {referenceEntries.map((entry, index) => (
                    <div key={index} className="res-two-item">
                        <p>{entry.reference}</p>
                        <p>{entry.role} at {entry.workplace}</p>
                        <p>{entry.phone} | {entry.email}</p>
                    </div>
                ))}
            </section>
        </div>
    );
};