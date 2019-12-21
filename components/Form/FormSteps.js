import React, {useState} from "react";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";
import FormStep4 from "./FormStep4";

function FormSteps() {

    const [step, setStep] = useState(2);
    const [selectedOption, setSelectedOption] = useState('option1');

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

    const handlerSelect = (e) => {
        setSelectedOption(e.target.value)
    };

    const handlerSubmit = (e) => {
        e.preventDefault();
    };

    const showsStep = (number) => {
        if (number === 1) {
            return <FormStep1 handlerSelect={handlerSelect} selectedOption={selectedOption}
                              handlerStepUp={handlerStepUp}/>
        }
        if (number === 2) {
            return <FormStep2 handlerSelect={handlerSelect} selectedOption={selectedOption}
                              handlerStepUp={handlerStepUp} handlerStepDown={handlerStepDown}/>
        }
        if (number === 3) {
            return <FormStep3 handlerSelect={handlerSelect} selectedOption={selectedOption}
                              handlerStepUp={handlerStepUp} handlerStepDown={handlerStepDown}/>
        }
        if (number === 4) {
            return <FormStep4 handlerSelect={handlerSelect} selectedOption={selectedOption}
                               handlerStepDown={handlerStepDown}/>
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