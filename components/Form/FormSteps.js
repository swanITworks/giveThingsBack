import React, {useState} from "react";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";
import FormStep4 from "./FormStep4";

function FormSteps() {

    const [step, setStep] = useState(3);
    const [selectedOptionStep1, setSelectedOptionStep1] = useState('');
    const [selectedOptionStep3, setSelectedOptionStep3] = useState('');

    const handlerStepUp = () => {
        if (step < 4) {
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

    const handlerSelectStep3 = (e) => {
        setSelectedOptionStep3(e.target.id);
        console.log(e.target.id);
    };

    const handlerSubmit = (e) => {
        e.preventDefault();
    };

    const showsStep = (number) => {
        if (number === 1) {
            return <FormStep1 handlerSelectStep1={handlerSelectStep1} selectedOptionStep1={selectedOptionStep1}
                              handlerStepUp={handlerStepUp}/>
        }
        if (number === 2) {
            return <FormStep2 handlerStepUp={handlerStepUp} handlerStepDown={handlerStepDown}/>
        }
        if (number === 3) {
            return <FormStep3 handlerStepUp={handlerStepUp} handlerStepDown={handlerStepDown} selectedOptionStep3={selectedOptionStep3} handlerSelectStep3={handlerSelectStep3}/>
        }
        if (number === 4) {
            return <FormStep4 handlerStepDown={handlerStepDown}/>
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