import DetailForm from "../Forms/detailForm"
import '../../assets/styles/home.css'

import React, { useContext } from "react";
import { TemplateGalleryContext } from "../../Contexts/templateGalleryContext"


const Home: React.FC = () => {
    const templateGalleryContext = useContext(TemplateGalleryContext)
    if (!templateGalleryContext) return null;
    const {setIsTemplateGalleryOpen, isTemplateGalleryOpen} = templateGalleryContext
    
    const handleOpenGallery = () => {
        setIsTemplateGalleryOpen(!isTemplateGalleryOpen);
    }

    const onDownloadButtonClick = () => {
        window.print();
    }
    return (
        <>
            <div className="banner">
                <h1>Welcome to Jobify</h1>
               <div className="banner-btns">
                    <button className="download-btn"  onClick={()=> handleOpenGallery()}>Templates</button>
                    <button onClick={onDownloadButtonClick} className="download-btn">Download</button>
               </div>
               <div className="account-info">
                
               </div>
            </div>
            <DetailForm/>
        </>
    )
}

export default Home;