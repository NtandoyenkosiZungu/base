import '../../assets/styles/detail-form.css'

const DetailForm : React.FC = () => {
    return (
        <>
            <div className='detail-form'>
                <div className='personal-info'>
                    <div>
                        <span>
                            <label htmlFor="name">Name</label>
                            <input type="text" id='name' name='name' />
                        </span>
                        <span>
                            <label htmlFor="surname">Surname</label>
                            <input type="text" id='surname' name='surname' />
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailForm;