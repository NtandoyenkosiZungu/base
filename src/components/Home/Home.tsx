import DetailForm from "../Forms/detailForm"
import '../../assets/styles/home.css'
const Home: React.FC = () => {
    return (
        <>
            <div className="banner">
                <h1>Welcome to Jobify</h1>
            </div>
            <DetailForm/>
        </>
    )
}

export default Home;