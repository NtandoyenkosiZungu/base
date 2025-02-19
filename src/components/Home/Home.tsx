import DetailForm from "../Forms/detailForm"
import '../../assets/styles/home.css'
const Home: React.FC = () => {
    const onDownloadButtonClick = () => {
        window.print()
    }
    return (
        <>
            <div className="banner">
                <h1>Welcome to Jobify</h1>
                <button onClick={onDownloadButtonClick} className="download-btn">Download</button>
            </div>
            <DetailForm/>
        </>
    )
}

export default Home;