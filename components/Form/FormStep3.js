import React, {useState} from "react";

function FormStep3(props) {

    const selectedOption = props.selectedOption;
    const handlerSelect = props.handlerSelect;

    return (
        <>
            <div className='FormStep3Warning'>
                <h2>Important!</h2>
                <p>If you know who you want to help, you can enter the name of this organization in the search engine. You can also filter organizations
                    by their location or the purpose of their help.</p>
            </div>
            <div className='Step3'>
                <div>
                    <p>Step 3/4</p>
                    <h2>Localization:</h2>
                    <select>
                        <option disabled="" selected="" className='hide'>Select Option</option>
                        <option value="London">London</option>
                        <option value="Manchester">Manchester</option>
                        <option value="Liverpool">Liverpool</option>
                        <option value="Birmingham">Birmingham</option>
                        <option value="Leeds">Leeds</option>
                    </select>
                    <h3>Who do you want to help?</h3>
                    <h3>Enter the name of a specific organization (optional)</h3>
                    <input type='text'/>
                </div>
                <div className='buttons'>
                    <button className='button' onClick={props.handlerStepDown}>Back</button>
                    <button className='button' onClick={props.handlerStepUp}>Next</button>
                </div>
            </div>
        </>
    )
}

export default FormStep3;