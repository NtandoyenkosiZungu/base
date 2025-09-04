import '../../assets/styles/detail-form.css';
import { EducationDetails, PersonalDetails, ExperienceDetails, ProjectDetails, ReferenceDetails, CertificationsDetails, AchievementDetails, TechnicalSkillDetails, SoftSkillDetails } from './SubForms';
import { useContext, Suspense, lazy } from 'react';
import { TemplateGalleryContext } from '../../Contexts/templateGalleryContext';
import { TemplateGallery } from '../Extra/TemplateGallery';
import { useStateSwitch } from '../../Contexts/SwitchContext';

// Lazy load template components
const TemplateOne = lazy(() => import('../Templates/TemplateOne'));
const TemplateTwo = lazy(() => import('../Templates/TemplateTwo'));
const TemplateThree = lazy(() => import('../Templates/TemplateThree'));
const TemplateFour = lazy(() => import('../Templates/TemplateFour'));

// Loading fallback for templates
const TemplateLoadingFallback = () => (
  <div className='loader'>
  </div>
);

const DetailForm: React.FC = () => {

  const { stateSwitch } = useStateSwitch()

  const templateGalleryContext = useContext(TemplateGalleryContext);
  if (!templateGalleryContext) return null;
  const { template, setTemplate } = templateGalleryContext;

  setTemplate(localStorage.getItem('template') || 'Template-One');
  // Set default template if not already set 

  return (
    <>
      <div className={!stateSwitch ? 'input-form' : 'in-none-display'}>
        <div style={{ width: "100%" }}>
          <hr />
          <PersonalDetails />
          <hr />
          <EducationDetails />
          <hr />
          <ExperienceDetails />
          <hr />
          <ProjectDetails />
          <hr />
          <CertificationsDetails />
          <hr />
          <TechnicalSkillDetails />
          <hr />
          <SoftSkillDetails />
          <hr />
          <AchievementDetails />
          <hr />
          <ReferenceDetails />
        </div>
      </div>


      <div className={stateSwitch ? 'output-form' : 'out-none-display'}>
        <Suspense fallback={<TemplateLoadingFallback />}>
          {template === 'Template-One' ? <TemplateOne /> :
            template === 'Template-Two' ? <TemplateTwo /> :
              template === 'Template-Three' ? <TemplateThree /> :
                template === 'Template-Four' ? <TemplateFour /> :
                  <TemplateOne />
          }
        </Suspense>
      </div>
      <div>
        <TemplateGallery />
      </div>
    </>
  );
}

export default DetailForm;