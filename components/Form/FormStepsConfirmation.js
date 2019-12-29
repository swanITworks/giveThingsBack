import React, {useState} from "react";

function FormStepConfirmation(props) {

    return (
        <>
            <div className='StepsConfirmation'>
                <div>
                    <h2>Summary of your gift</h2>
                    <div className='realizationData'>
                        <div className='stuffConfirmation'>
                            <h3>You give back:</h3>
                            <ul>
                                <li><img src='../../assets/Icon-1.svg'/></li>
                                <li><img src='../../assets/Icon-4.svg'/><div>for localization:</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='buttons'>
                    <button className='button' onClick={props.handlerStepDown}>Back</button>
                    <button className='button' onClick={props.handlerStepUp}>Next</button>
                </div>
            </div>
        </>
    )
}

export default FormStepConfirmation;