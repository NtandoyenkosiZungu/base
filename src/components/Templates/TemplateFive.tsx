import { useContext } from 'react';
import '../../assets/template-styles/template-five.css'
import { PersonalDetailsContext } from '../../Contexts/PersonalDetailsContext'


export const TemplateFive: React.FC = () => {
    const personalDetailsContext = useContext(PersonalDetailsContext);
    if (!personalDetailsContext) return null;
    const {name, surname, role} = personalDetailsContext;

    return (
        <div className='template-five' id='cv-template'>
            <section className='template-five-header'>
                <h1>{name} {surname}</h1>
                <h3>{role}</h3>
            </section>
        </div>
    )
}