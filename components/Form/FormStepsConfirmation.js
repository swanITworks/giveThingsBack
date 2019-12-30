import React, {useState} from "react";

function FormStepConfirmation(props) {

    const {selectedOptionStep1, selectedOptionStep2, selectedOptionStep3Town, selectedOptionStep3Who} = props;

    return (
        <>
            <div className='StepsConfirmation'>
                <div>
                    <h2>Summary of your gift</h2>
                    <div className='realizationData'>
                        <div className='stuffConfirmation'>
                            <h3>You give back:</h3>
                            <ul>
                                <li><img src='../../assets/Icon-1.svg'/>
                                    <h4>{selectedOptionStep2} bags, {selectedOptionStep1},
                                        for {selectedOptionStep3Who} </h4>
                                </li>
                                <li><img src='../../assets/Icon-4.svg'/>
                                    <h4>for localization: {selectedOptionStep3Town}</h4>
                                </li>
                            </ul>
                        </div>
                        <div className='addressAndTermConfirmation'>
                            <div className='leftSide'>
                                <h3>Address of collection:</h3>
                                <p>Street</p>
                                <p>City</p>
                                <p>Post Code</p>
                                <p>Phone number</p>
                            </div>
                            <div className='rightSide'>
                                <h3>Term of collection:</h3>
                                <p>Date</p>
                                <p>Time</p>
                                <p>Aditional information for courier company</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='buttons'>
                    <button className='button' onClick={props.handlerStepDown}>Back</button>
                    <button className='button' onClick={() => {
                        console.log('sent')
                    }}>Confirm
                    </button>
                </div>
            </div>
        </>
    )
}

export default FormStepConfirmation;