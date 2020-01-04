import React, {useState} from "react";

const contactTemplate = {
    name: '',
    email: '',
    message: '',
};

function HomeContactUs() {

    const [contactInputs, setContactInputs] = useState(contactTemplate);
    const [warnings, setWarnings] = useState('');

    const handlerInputsContact = (e) => {
        const {name, value} = e.target;
        setContactInputs(prevState => ({...prevState, [name]: value}));
    };

    const handlerSubmitContact = (e) => {
        e.target.preventDefault();
    };

    return (
        <div name='contactUs' className='homeContactUs image'>
            <div className='content'>
                <h3>Contact with us</h3>
                <img src='../../assets/Decoration.svg'/>
                <form onSubmit={handlerSubmitContact}>
                    <div className='topOfForm'>
                        <label>Write your name<input name='name' type='name' placeholder='name'
                                                     onChange={handlerInputsContact} value={contactInputs.name}/></label>
                        <label>Write your email<input name='email' type='email' placeholder='email'
                                                      onChange={handlerInputsContact}
                                                      value={contactInputs.email}/></label>
                    </div>
                    <div className='mainForm'>
                        <label>Write your message<br/><textarea name='message' rows='5' onChange={handlerInputsContact}
                                                                value={contactInputs.message}
                                                                placeholder='Lorem ipsum dolor sit amet, consectetur
                                                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/></label>
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