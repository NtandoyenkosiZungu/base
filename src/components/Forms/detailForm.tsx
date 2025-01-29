import '../../assets/styles/detail-form.css';
import { EducationContextProvider } from '../../Contexts/EducationContext';
import { ExperienceContextProvider } from '../../Contexts/ExperienceContext';
import { PersonalDetailsContextProvider } from '../../Contexts/PersonalDetailsContext';
import { EducationDetails, PersonalDetails, ExperienceDetails } from './SubForms';

const DetailForm: React.FC = () => {
  return (
    <div className="detail-form">
      <PersonalDetailsContextProvider>
        <EducationContextProvider>
          <ExperienceContextProvider>

            <div className='input-form'>
              <PersonalDetails />
              <EducationDetails />
              <ExperienceDetails />
            </div>

            <div className='output-form'>
              <div className="resume">
                
              </div>
            </div>

          </ExperienceContextProvider>
        </EducationContextProvider>
      </PersonalDetailsContextProvider>
    </div>
  );
};

export default DetailForm;