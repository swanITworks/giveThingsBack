import React, {useState} from "react";

const contactTemplate = {
    name: '',
    email: '',
    message: '',
};

const warningsTemplate = {
    name: '',
    email: '',
    message: '',
};

function HomeContactUs() {

    const [contactInputs, setContactInputs] = useState(contactTemplate);
    const [warnings, setWarnings] = useState(warningsTemplate);

    const handlerInputsContactChange = (e) => {
        const {name, value} = e.target;
        setContactInputs(prevState => ({...prevState, [name]: value}));
    };


    const handlerSubmitContact = (e) => {
        e.preventDefault();
        if (contactInputs.name.length < 2) {
            setWarnings(prevState => ({...prevState, name: <div>name should have minimum 2 characters</div>}))
        } else {
            setWarnings(prevState => ({...prevState, name:''}))
        }

        if (contactInputs.email.length < 2) {
            setWarnings(prevState => ({...prevState, email: 'email should have minimum 2 characters'}))
        } else {
            setWarnings(prevState => ({...prevState, email:''}))
        }

        if (contactInputs.message.length < 2) {
            setWarnings(prevState => ({...prevState, message: 'message should have minimum 2 characters'}))
        } else {
            setWarnings(prevState => ({...prevState, message:''}))
        }

    };

    return (
        <div name='contactUs' className='homeContactUs image'>
            <div className='content'>
                <h3>Contact with us</h3>
                <img src='../../assets/Decoration.svg'/>
                <form onSubmit={handlerSubmitContact}>
                    <div className='topOfForm'>
                        <label>Write your name<input name='name' type='name' placeholder='name'
                                                     onChange={handlerInputsContactChange}
                                                     value={contactInputs.name}/>{warnings.name}</label>
                        <label>Write your email<input name='email' type='email' placeholder='email'
                                                      onChange={handlerInputsContactChange}
                                                      value={contactInputs.email}/>{warnings.email}</label>
                    </div>
                    <div className='mainForm'>
                        <label>Write your message<br/><textarea name='message' rows='5' onChange={handlerInputsContactChange}
                                                                value={contactInputs.message}
                                                                placeholder='Lorem ipsum dolor sit amet, consectetur
                                                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>{warnings.message}</label>
                    </div>
                    <button type='submit' className='sendButton'>Send
                    </button>
                </form>
            </div>
            <div className='copyright'>
                Copyright by Coders Lab
            </div>
            <div className='icons'>
                <img src='../../assets/Facebook.svg'/>
                <img src='../../assets/Instagram.svg'/>
            </div>
        </div>

    )
}

export default HomeContactUs;