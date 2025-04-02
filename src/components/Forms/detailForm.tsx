import '../../assets/styles/detail-form.css';
import { EducationDetails, PersonalDetails, ExperienceDetails, ProjectDetails, ReferenceDetails, CertificationsDetails, AchievementDetails, TechnicalSkillDetails } from './SubForms';

import { TemplateOne } from '../Templates/TemplateOne';
import { MainContextProvider } from '../../Contexts/MainFunctionContext';

const DetailForm: React.FC = () => {
  return (
    <div className="detail-form">
      <MainContextProvider>
        <div className='input-form'>
          <PersonalDetails />
          <hr />
          <EducationDetails />
          <hr />
          <ExperienceDetails />
          <hr />
          <ProjectDetails />
          <hr />
          <CertificationsDetails/>
          <hr />
          <TechnicalSkillDetails/>
          <hr />
          <AchievementDetails/>
          <hr />
          <ReferenceDetails />
        </div>

        <div className='output-form'>
          <TemplateOne />
        </div>
      </MainContextProvider>
    </div>
  );
};

export default DetailForm;