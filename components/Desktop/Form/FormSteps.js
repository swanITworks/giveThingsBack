import React, {useState} from "react";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";
import FormStep4 from "./FormStep4";
import FormStepConfirmation from "./FormStepsConfirmation";
import FormStepsSuccess from "./FormStepsSuccess";
import firebase from "../../../config.js";
import {useMediaQuery} from 'react-responsive';

const inputsTemplate = {
    street: '',
    town: '',
    postCode: '',
    phoneNumber: '',
    date: '',
    time: '',
    info: '',
    organization: '',
};

const isSelectedTemplate = {
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
};

const DesktopAndTablet = ({children}) => {
    const isDesktop = useMediaQuery({minWidth: 768});
    return isDesktop ? children : null
};

const Mobile = ({children}) => {
    const isMobile = useMediaQuery({maxWidth: 767});
    return isMobile ? children : null
};

function FormSteps(props) {

    let collectionLength = '';
    const {logInEmail, logInPass} = props;
    const [inputsData, setInputsData] = useState(inputsTemplate);
    const [step, setStep] = useState(1);
    const [selectedOptionStep1, setSelectedOptionStep1] = useState('');
    const [selectedOptionStep2, setSelectedOptionStep2] = useState('choose');
    const [selectedOptionStep3Who, setSelectedOptionStep3Who] = useState(isSelectedTemplate);
    const [selectedOptionStep3Town, setSelectedOptionStep3Town] = useState('choose');
    const options = [['clothes hat can be used again', 'clothes to throw away', 'toys', 'books', 'others'], ['kids', 'alone mothers', 'homeless people', 'disabled people', 'older people']];
    const [selectedArray, setSelectedArray] = useState([]);

    const handlerInputOnChange = (e) => {
        const {name, value} = e.target;
        setInputsData(prevState => ({...prevState, [name]: value}));
    };

    const handlerStepUp = () => {
        if (step < 5) {
            setStep(prevState => {
                setStep(prevState + 1)
            })
        }
    };

    const handlerStepDown = () => {
        if (step > 1) {
            setStep(prevState => {
                setStep(prevState - 1)
            })
        }
    };

    const handlerSuccess = () => {
        setStep(6);
    };

    const handlerSelectStep1 = (e) => {
        setSelectedOptionStep1(e.target.id);
        if (selectedOptionStep1 === e.target.id) {
            setSelectedOptionStep1('');
        }
    };

    const handlerSelectStep2 = (target) => {
        setSelectedOptionStep2(target.id)
    };

    const handlerSelectStep3WhoTrue = (e) => {
        const {id, name} = e.target;
        setSelectedOptionStep3Who(prevState => ({...prevState, [id]: true}));
        let myOptions = options[1];
        let number = id.charAt(id.length - 1);
        let myOption = myOptions[number - 1];
        const newArray = [...selectedArray, myOption];
        setSelectedArray([...newArray]);
    };

    const handlerSelectStep3WhoFalse = (e) => {
        const {id, value} = e.target;
        setSelectedOptionStep3Who(prevState => ({...prevState, [id]: false}));
        let myOptions = options[1];
        let number = id.charAt(id.length - 1);
        let myOption = myOptions[number];
        const newArray = [...selectedArray.filter(word => word === myOption)];
        setSelectedArray([...newArray]);
    };

    const handlerSelectStep3Town = (target) => {
        setSelectedOptionStep3Town(target.id)
    };

    const checkLengthOfCollectionAndSendData = () => {
        const db = firebase.firestore();
        db.collection('users')
            .doc(logInEmail)
            .collection('collections')
            .get()
            .then(function (querySnapshot) {
                collectionLength = querySnapshot.docs.length;
                sendData();
            })
            .catch(function () {
                console.log('sorry kurwa ale nie ma takiej kolekcji');
            });
    };

    const sendData = () => {
        const db = firebase.firestore();
        const collection = [];
        const newCollection = {
            ...inputsData,
            step1: selectedOptionStep1,
            step2: selectedOptionStep2,
            step3Who: selectedOptionStep3Who,
            step3Town: selectedOptionStep3Town,
        };
        collection.push(newCollection);
        db.collection('users')
            .doc(logInEmail)
            .collection('collections')
            .doc("coll" + (collectionLength + 1))
            .set({...collection})
            .then(function () {
                console.log('document succesfull writen');
                handlerSuccess();
            })
            .catch(function () {
                console.error("Error writing document: ", error);
                console.log('chujnia')
            });
        console.log('sent');
    };

    const handlerSubmit = () => {
        checkLengthOfCollectionAndSendData();
    };

    const showsStep = (number) => {
        if (number === 1) {
            return (
                <>
                    <FormStep1 handlerSelectStep1={handlerSelectStep1} selectedOptionStep1={selectedOptionStep1}
                               handlerStepUp={handlerStepUp} optionsStep1={options[0]}/>
                </>
            )
        }

        if (number === 2) {
            return <FormStep2 handlerStepUp={handlerStepUp} handlerStepDown={handlerStepDown}
                              selectedOptionStep2={selectedOptionStep2} handlerSelectStep2={handlerSelectStep2}/>
        }

        if (number === 3) {
            return <FormStep3 handlerStepUp={handlerStepUp} handlerStepDown={handlerStepDown}
                              selectedOptionStep3Who={selectedOptionStep3Who}
                              selectedOptionStep3Town={selectedOptionStep3Town}
                              handlerSelectStep3Town={handlerSelectStep3Town} optionsStep3={options[1]}
                              inputsData={inputsData} handlerInputOnChange={handlerInputOnChange}
                              handlerSelectStep3WhoTrue={handlerSelectStep3WhoTrue}
                              handlerSelectStep3WhoFalse={handlerSelectStep3WhoFalse} selectedArray={selectedArray}/>
        }

        if (number === 4) {
            return <FormStep4 handlerStepDown={handlerStepDown} handlerStepUp={handlerStepUp}
                              inputsData={inputsData} handlerInputOnChange={handlerInputOnChange}/>
        }

        if (number === 5) {
            return <FormStepConfirmation handlerStepDown={handlerStepDown}
                                         selectedOptionStep1={selectedOptionStep1}
                                         selectedOptionStep2={selectedOptionStep2}
                                         selectedOptionStep3Who={selectedOptionStep3Who}
                                         selectedOptionStep3Town={selectedOptionStep3Town}
                                         inputsData={inputsData} handlerSubmit={handlerSubmit}
                                         handlerSuccess={handlerSuccess} selectedArray={selectedArray}/>
        }

        if (number === 6) {
            return <FormStepsSuccess/>
        }
    };

    return (
        <div className='formSteps'>
            <Mobile>
                {step!==6 ?
                <div className='mobileFormStepsHeader'>
                    <div className='mobileFormStepsTitle'>
                        <h2>Give back the things you don't want anymore for people that need
                            it.</h2>
                        <h3>Four steps are enough</h3>
                    </div>
                    <div className='mobileFormStepsRectangles'>
                        <div className='rectangle'
                             style={(step === 1 || step === 2 || step === 3 || step === 4 || step === 5) ? {
                                 backgroundColor: '#FAD648',
                                 border: '1px solid #3C3C3C'
                             } : null}>1
                        </div>
                        <div className='rectangle' style={(step === 2 || step === 3 || step === 4 || step === 5) ? {
                            backgroundColor: '#FAD648',
                            border: '1px solid #3C3C3C'
                        } : null}>2
                        </div>
                        <div className='rectangle' style={(step === 3 || step === 4 || step === 5) ? {
                            backgroundColor: '#FAD648',
                            border: '1px solid #3C3C3C'
                        } : null}>3
                        </div>
                        <div className='rectangle' style={(step === 4 || step === 5) ? {
                            backgroundColor: '#FAD648',
                            border: '1px solid #3C3C3C'
                        } : null}>4
                        </div>
                        <div className='rectangle'
                             style={(step === 5) ? {backgroundColor: '#FAD648', border: '1px solid #3C3C3C'} : null}>
                            <i className="fas fa-check"></i>
                        </div>
                    </div>
                </div>
                    : null};
            </Mobile>
            <form onSubmit={handlerSubmit} className='steps'>
                {showsStep(step)}
            </form>
        </div>
    )
}

export default FormSteps;