import '../../assets/styles/detail-form.css';
import { EducationContextProvider } from '../../Contexts/EducationContext';
import { ExperienceContextProvider } from '../../Contexts/ExperienceContext';
import { PersonalDetailsContextProvider } from '../../Contexts/PersonalDetailsContext';
import { EducationDetails, PersonalDetails, ExperienceDetails } from './SubForms';

const DetailForm: React.FC = () => {
  return (
    <div className="detail-form">
      <PersonalDetailsContextProvider>
        <PersonalDetails/>
      </PersonalDetailsContextProvider>

      <EducationContextProvider>
        <EducationDetails/>
      </EducationContextProvider>

      <ExperienceContextProvider>
        <ExperienceDetails/>
      </ExperienceContextProvider>
    </div>
  );
};

export default DetailForm;