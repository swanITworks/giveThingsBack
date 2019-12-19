import React, {useState} from "react";
import FormStep1 from "./FormStep1";

function FormSteps() {

    const [step, setStep] = useState(1);

    const showsStep = (number) => {
        if (number === 1) {
            return <FormStep1/>
        }

        if (number === 2) {
            return <FormStep1/>
        }


        if (number === 3) {
            return <FormStep1/>
        }

        if (number === 4) {
            return <FormStep1/>
        }
    };

    return (
        <div className='formSteps'>
            {showsStep(step)}
        </div>
    )
}

export default FormSteps;