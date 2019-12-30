import React, {useState} from "react";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";
import FormStep4 from "./FormStep4";
import FormStepConfirmation from "./FormStepsConfirmation";

const addressTemplate = {
    street: '',
    town: '',
    postCode: '',
    phoneNumber: '',
};

function FormSteps() {

    const [collectionAddress, setCollectionAddress] = useState(addressTemplate);
    const [step, setStep] = useState(5);
    const [selectedOptionStep1, setSelectedOptionStep1] = useState('');
    const [selectedOptionStep2, setSelectedOptionStep2] = useState('choose');
    const [selectedOptionStep3Who, setSelectedOptionStep3Who] = useState('');
    const [selectedOptionStep3Town, setSelectedOptionStep3Town] = useState('choose');
    const options = [['clothes hat can be used again', 'clothes to throw away', 'toys', 'books', 'others'], ['kids', 'alone mothers', 'homeless people', 'disabled people', 'older people']];

    const handlerInputOnChange = (e) => {
        const {name, value} = e.target;
        setCollectionAddress(prevState => ({...prevState, [name]: value}));
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

    const handlerSelectStep1 = (e) => {
        setSelectedOptionStep1(e.target.id);
        console.log(e.target.id);
    };

    const handlerSelectStep2 = (target) => {
        setSelectedOptionStep2(target.id)
    };

    const handlerSelectStep3Who = (e) => {
        setSelectedOptionStep3Who(e.target.id);
        console.log(e.target.id);
    };

    const handlerSelectStep3Town = (target) => {
        setSelectedOptionStep3Town(target.id)
    };

    const handlerSubmit = (e) => {
        e.preventDefault();
    };

    const showsStep = (number) => {
        if (number === 1) {
            return <FormStep1 handlerSelectStep1={handlerSelectStep1} selectedOptionStep1={selectedOptionStep1}
                              handlerStepUp={handlerStepUp} optionsStep1={options[0]}/>
        }

        if (number === 2) {
            return <FormStep2 handlerStepUp={handlerStepUp} handlerStepDown={handlerStepDown}
                              selectedOptionStep2={selectedOptionStep2} handlerSelectStep2={handlerSelectStep2}/>
        }

        if (number === 3) {
            return <FormStep3 handlerStepUp={handlerStepUp} handlerStepDown={handlerStepDown}
                              selectedOptionStep3Who={selectedOptionStep3Who}
                              handlerSelectStep3Who={handlerSelectStep3Who}
                              selectedOptionStep3Town={selectedOptionStep3Town}
                              handlerSelectStep3Town={handlerSelectStep3Town} optionsStep3={options[1]}/>
        }

        if (number === 4) {
            return <FormStep4 handlerStepDown={handlerStepDown} handlerStepUp={handlerStepUp} collectionAddress={collectionAddress} handlerInputOnChange={handlerInputOnChange}/>
        }

        if (number === 5) {
            return <FormStepConfirmation handlerStepDown={handlerStepDown}
                                         selectedOptionStep1={selectedOptionStep1}
                                         selectedOptionStep2={selectedOptionStep2}
                                         selectedOptionStep3Who={selectedOptionStep3Who}
                                         selectedOptionStep3Town={selectedOptionStep3Town}
            />
        }
    };

    return (
        <div className='formSteps'>
            <form onSubmit={handlerSubmit} className='steps'>
                {showsStep(step)}
            </form>
        </div>
    )
}

export default FormSteps;