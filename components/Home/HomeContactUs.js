import React, {useEffect, useState} from "react";

const contactTemplate = {
    name: '',
    email: '',
    message: '',
};

const warningsTemplate = {
    name: '',
    nameIsValidated: false,
    email: '',
    emailIsValidated: false,
    message: '',
    messageIsValidated: false,
    success: false,
    isValidated: false
};

function HomeContactUs() {

    const [contactInputs, setContactInputs] = useState(contactTemplate);
    const [warnings, setWarnings] = useState(warningsTemplate);

    const handlerInputsContactChange = (e) => {
        const {name, value} = e.target;
        setContactInputs(prevState => ({...prevState, [name]: value}));
    };

    useEffect(() => {
        if (warnings.nameIsValidated === true && warnings.emailIsValidated === true && warnings.messageIsValidated === true) {
            sendMessageToServer()
        }
    }, [warnings.isValidated]);


    const handlerSubmitContact = (e) => {
        e.preventDefault();
        // setWarnings(prevState => ({
        //     ...prevState,
        //     success: false,
        //     isValidated: false,
        //     nameIsValidated: false,
        //     emailIsValidated: false,
        //     messageIsValidated: false,
        // }));


        if (contactInputs.name.length < 2) {
            setWarnings(prevState => ({
                ...prevState,
                name: <div className='warning'>Name is invalid</div>,
                nameIsValidated: false,
                isValidated: !prevState.isValidated,
            }))
        } else {
            setWarnings(prevState => (
                {
                    ...prevState,
                    name: '',
                    nameIsValidated: true,
                    isValidated: !prevState.isValidated,
                }
            ))
        }
        if (contactInputs.email.length < 2 || (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(contactInputs.email) === false)) {
            setWarnings(prevState => ({
                ...prevState,
                email: <div className='warning'>Email is invalid</div>,
                emailIsValidated: false,
                isValidated: !prevState.isValidated,
            }))
        } else {
            setWarnings(prevState => (
                {
                    ...prevState,
                    email: '',
                    emailIsValidated: true,
                    isValidated: !prevState.isValidated,

                }
            ))

        }
        if (contactInputs.message.length < 120) {
            setWarnings(prevState => ({
                ...prevState,
                message: <div className='warning'>Message should have minimum 120 characters</div>,
                messageIsValidated: false,
                isValidated: !prevState.isValidated,
            }))
        } else {
            setWarnings(prevState => (
                {
                    ...prevState,
                    message: '',
                    messageIsValidated: true,
                    isValidated: !prevState.isValidated,
                }
            ))
        }
    };

    const sendMessageToServer = () => {
        fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: contactInputs.name,
                    email: contactInputs.email,
                    message: contactInputs.message,
                })
            }
        ).then((res) => res.json())
            .then((data) => {
                    console.log(data);
                    setWarnings(prevState => ({...prevState, success: true}));
                    setContactInputs(prevState => ({
                        ...prevState,
                        name: '',
                        email: '',
                        message: '',
                        nameIsValidated: false,
                        emailIsValidated: false,
                        messageIsValidated: false,
                        isValidated: false,
                    }));

                }
            )
            .catch((err) => console.log(err))
    };

    return (
        <div name='contactUs' className='homeContactUs image'>
            <div className='content'>
                <h3>Contact with us</h3>
                <img src='../../assets/Decoration.svg'/>
                {warnings.success === true ?
                    <><div className='success'>Message was sent!</div><div className='success'>We will contact you soon.</div></>: null}
                <form onSubmit={handlerSubmitContact} onClick={() => {
                    setWarnings(prevState => ({...prevState, success: false}))
                }}>
                    <div className='topOfForm'>
                        <label>Write your name<input
                            style={warnings.name !== '' ? {borderBottom: '1px solid #960c0c'} : null} name='name'
                            type='name' placeholder='name'
                            onChange={handlerInputsContactChange}
                            value={contactInputs.name}/>{warnings.name}</label>
                        <label>Write your email<input
                            style={warnings.email !== '' ? {borderBottom: '1px solid #960c0c'} : null} name='email'
                            type='email' placeholder='email'
                            onChange={handlerInputsContactChange}
                            value={contactInputs.email}/>{warnings.email}</label>
                    </div>
                    <div className='mainForm'>
                        <label>Write your message<br/><textarea
                            style={warnings.message !== '' ? {borderBottom: '1px solid #960c0c'} : null} name='message'
                            rows='5'
                            onChange={handlerInputsContactChange}

                            value={contactInputs.message}
                            placeholder='Lorem ipsum dolor sit amet, consectetur
                                                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>{warnings.message}
                        </label>
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