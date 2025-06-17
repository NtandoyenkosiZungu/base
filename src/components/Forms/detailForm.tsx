import '../../assets/styles/detail-form.css';
import { EducationDetails, PersonalDetails, ExperienceDetails, ProjectDetails, ReferenceDetails, CertificationsDetails, AchievementDetails, TechnicalSkillDetails, SoftSkillDetails } from './SubForms';
import { useContext, Suspense, lazy, useState } from 'react';
import { TemplateGalleryContext } from '../../Contexts/templateGalleryContext';
import { TemplateGallery } from '../Extra/TemplateGallery';
import { ATSComponent } from '../ATS-Analyzer/ATS-Analyzer';
import { ATSContext } from '../../Contexts/ats/ATSContext';
import { ResultsDisplay } from '../ATS-Analyzer/ats-components/ResultsDisplay';
import { LoadingSpinner } from '../ATS-Analyzer/ats-components/LoadingSpinner';

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
  const [formState, setFormState] = useState<boolean>(false); // State to toggle between input form and ATS component

  const ats = useContext(ATSContext);
  if (!ats) return null;

  const templateGalleryContext = useContext(TemplateGalleryContext);
  if (!templateGalleryContext) return null;
  const { template, setTemplate } = templateGalleryContext;

  setTemplate(localStorage.getItem('template') || 'Template-One');
  // Set default template if not already set 

  return (
    <div className="detail-form">
      <div className='input-form'>
        <div className='switch'>
          <input
            type="checkbox"
            checked={!formState}
            onChange={(e) => { setFormState(!e.target.checked) }}
            id='formswitch'
          />
          <label htmlFor="formswitch"></label>
        </div>
        { 
          formState && 
            <div>
              <hr />
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
          }
          {
            !formState && 
            <div style={{width: "100%"}}> 
              <ATSComponent/>
            </div>
          }
        </div>


        <div className='output-form'>
          <div className='toggle-switch'>
            <input 
              id='ats-toggle'
              className='output-switch'
              type='checkbox'
              checked={ats.isAvailable}
              onChange={(e) => ats.setIsAvailable(e.target.checked)}
            />
            <label htmlFor="ats-toggle" className='ats-toggle-label'></label>
          </div>
          {ats.isAvailable && 
            <div className='ats-output'>
              <div className='title-holder'><h1>Analysis Results</h1></div>
                <Suspense fallback={<LoadingSpinner/>}> 
                  <ResultsDisplay result={ats.analysisResults}/>
                </Suspense>
            </div>
          }
          {!ats.isAvailable && 
            <Suspense fallback={<TemplateLoadingFallback />}>
              {template === 'Template-One' ? <TemplateOne /> :
              template === 'Template-Two' ? <TemplateTwo /> :
              template === 'Template-Three' ? <TemplateThree /> :
              template === 'Template-Four' ? <TemplateFour /> :
              <TemplateOne />
              }
            </Suspense>
          }
        </div>
        <div>
          <TemplateGallery/>
        </div>
    </div>
  );
}

export default DetailForm;