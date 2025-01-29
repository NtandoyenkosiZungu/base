import '../../assets/styles/detail-form.css';
import { EducationContextProvider, EducationFunctionContextProvider } from '../../Contexts/EducationContext';
import { ExperienceContextProvider } from '../../Contexts/ExperienceContext';
import { PersonalDetailsContextProvider } from '../../Contexts/PersonalDetailsContext';
import { EducationDetails, PersonalDetails, ExperienceDetails } from './SubForms';

import { TemplateOne } from '../Templates/TemplateOne';

const DetailForm: React.FC = () => {
  return (
    <div className="detail-form">
      <PersonalDetailsContextProvider>
        <EducationContextProvider>
          <ExperienceContextProvider>

            <EducationFunctionContextProvider>
              <div className='input-form'>
                <PersonalDetails />
                <EducationDetails />
                <ExperienceDetails />
              </div>

              <div className='output-form'>
                <TemplateOne />
              </div>
              
            </EducationFunctionContextProvider>

          </ExperienceContextProvider>
        </EducationContextProvider>
      </PersonalDetailsContextProvider>
    </div>
  );
};

export default DetailForm;