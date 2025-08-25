
import '../../assets/styles/hero-section.css'
import mainImage from '../../assets/images/img-one.png'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
    const navigate = useNavigate();
    return (
        <main>
            <div className='hero'>
                <div className='text'>
                    <h2>Create a proffesional Resume from our carefully curated templates</h2>
                    <button
                        onClick={()=> navigate('/login')}
                    >
                        Log In
                    </button>
                    <button
                        onClick={()=> navigate('/signup')}
                    >
                        Sign Up
                    </button>
                </div>
                <img  className='hero-image' src={mainImage} alt="Resume Image"  />
            </div>
        </main>
    )
}


export default HeroSection;