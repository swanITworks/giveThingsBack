import React, {useState} from "react";

function FormStepConfirmation(props) {

    const {myArray,selectedOptionStep1, selectedOptionStep2, selectedOptionStep3Town, selectedOptionStep3Who, inputsData, handlerSubmit, handlerSuccess} = props;
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
                                        for {myArray.map(item=>(' ' + item)) + ' ' + inputsData.organization}</h4>
                                </li>
                                <li><img src='../../assets/Icon-4.svg'/>
                                    <h4>for localization: {selectedOptionStep3Town}</h4>
                                </li>
                            </ul>
                        </div>
                        <div className='addressAndTermConfirmation'>
                            <div className='leftSide'>
                                <h3>Address of collection:</h3>
                                <ul>
                                    <li><p>Street</p><p>{inputsData.street}</p></li>
                                    <li><p>City</p><p>{inputsData.town}</p></li>
                                    <li><p>Post Code</p><p>{inputsData.postCode}</p></li>
                                    <li><p>Phone number</p><p>{inputsData.phoneNumber}</p></li>
                                </ul>
                            </div>
                            <div className='rightSide'>
                                <h3>Term of collection:</h3>
                                <ul>
                                    <li><p>Date</p><p>{inputsData.date}</p></li>
                                    <li><p>Time</p><p>{inputsData.time}</p></li>
                                    <li><p>Additional information for courier company</p><p>{inputsData.info}</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='buttons'>
                    <button className='button' onClick={props.handlerStepDown}>Back</button>
                    <button className='button' onClick={handlerSubmit}>Confirm</button>
                </div>
            </div>
        </>
    )
}

export default FormStepConfirmation;