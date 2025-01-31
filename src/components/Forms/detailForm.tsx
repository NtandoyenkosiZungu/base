import '../../assets/styles/detail-form.css';
import { EducationDetails, PersonalDetails, ExperienceDetails } from './SubForms';

import { TemplateOne } from '../Templates/TemplateOne';
import { MainContextProvider } from '../../Contexts/MainFunctionContext';

const DetailForm: React.FC = () => {
  return (
    <div className="detail-form">
      <MainContextProvider>
        <div className='input-form'>
          <PersonalDetails />
          <EducationDetails />
          <ExperienceDetails />
        </div>

        <div className='output-form'>
          <TemplateOne />
        </div>
      </MainContextProvider>
    </div>
  );
};

export default DetailForm;