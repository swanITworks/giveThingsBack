import React, {useState} from "react";

function FormStepsSuccess(props) {

    const {selectedOptionStep1, selectedOptionStep2, selectedOptionStep3Town, selectedOptionStep3Who, inputsData, handlerSubmit} = props;
    return (
        <>
            <div className='StepsSuccess'>
                <div className='wrapper'>
                    <div>
                        <h2>Thank you for submitting the form
                            We will send any by e-mail
                            pickup information.</h2>
                        <img src='../../assets/Decoration.svg'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormStepsSuccess;