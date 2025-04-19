import React, {useContext} from "react";
import '../../assets/template-styles/template-gallery.css'
import { TemplateGalleryContext } from "../../Contexts/templateGalleryContext";


export const TemplateGallery: React.FC = () => {
    const templateContext = useContext(TemplateGalleryContext);
    if (!templateContext) return null;
    const {setTemplate, setIsTemplateGalleryOpen, isTemplateGalleryOpen } = templateContext;

    const handleCloseGallery = () => {
        setIsTemplateGalleryOpen(false);
    }

    const handleTemplateSelection = (template: string) => {
        setTemplate(template);
        localStorage.setItem('template', template);
        handleCloseGallery();
    }

    return (
            <div className={`template-gallery + ${isTemplateGalleryOpen ? 'show':''}`}>
                <h1>Choose Your Template</h1>
                <div className="template-items">
                    <div className="template-item" onClick={()=> handleTemplateSelection("Template-One")}>Template 1</div>
                    <div className="template-item" onClick={()=> handleTemplateSelection("Template-Two")}>Template 2</div>
                    <div className="template-item" onClick={()=> handleTemplateSelection("Template-Three")}>Template 3</div>
                </div>
            </div>
    );  
}