import '../../assets/styles/detail-form.css';
import { EducationDetails, PersonalDetails, ExperienceDetails, ProjectDetails, ReferenceDetails, CertificationsDetails, AchievementDetails, TechnicalSkillDetails, SoftSkillDetails } from './SubForms';

import { TemplateOne } from '../Templates/TemplateOne';
import { MainContextProvider } from '../../Contexts/MainFunctionContext';
import { useContext } from 'react';
import { TemplateGalleryContext } from '../../Contexts/templateGalleryContext';
import { TemplateTwo } from '../Templates/TemplateTwo';
import { TemplateThree } from '../Templates/TemplateThree';
import { TemplateGallery } from '../Extra/TemplateGallery';

const DetailForm: React.FC = () => {
  const templateGalleryContext = useContext(TemplateGalleryContext);
  if (!templateGalleryContext) return null;
  const { template } = templateGalleryContext;

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
          <SoftSkillDetails/>
          <hr />
          <AchievementDetails/>
          <hr />
          <ReferenceDetails />
        </div>

        <div className='output-form'>
          {
            template === 'Template-One' ? <TemplateOne /> :
            template === 'Template-Two' ? <TemplateTwo /> :
            template === 'Template-Three' ? <TemplateThree /> :
            <TemplateOne />
          }
        </div>
        <div>
          <TemplateGallery/>
        </div>
      </MainContextProvider>
    </div>
  );
};

export default DetailForm;