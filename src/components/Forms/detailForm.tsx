import '../../assets/styles/detail-form.css';
import { EducationContextProvider } from '../../Contexts/EducationContext';
import { PersonalDetailsContextProvider } from '../../Contexts/PersonalDetailsContext';
import { EducationDetails, PersonalDetails } from './SubForms';

const DetailForm: React.FC = () => {
  return (
    <div className="detail-form">
      <PersonalDetailsContextProvider>
        <PersonalDetails/>
      </PersonalDetailsContextProvider>

      <EducationContextProvider>
        <EducationDetails/>
      </EducationContextProvider>
    </div>
  );
};

export default DetailForm;