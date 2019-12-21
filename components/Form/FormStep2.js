import React, {useState} from "react";

function FormStep2(props) {

    const selectedOption = props.selectedOption;
    const handlerSelect = props.handlerSelect;

    return (
        <>
            <div className='FormStep1Warning'>
                <h2>Important!</h2>
                <p>Pack all items to be returned in 60l bags. You can find detailed instructions on how to properly pack
                    things HERE.</p>
            </div>
            <div className='Step2'>
                <div>
                    <p>Step 2/4</p>
                    <h2>Enter the number of 60l bags, which you packed in:</h2>
                    <label>Quantity of 60l bags:</label>
                    <select>
                        <option disabled="" selected="" className='hide'>Select Option</option>
                        <option value="volvo">one bag</option>
                        <option value="saab">two bags</option>
                        <option value="mercedes">three bags</option>
                        <option value="audi">four bags</option>
                    </select>
                </div>
                <div className='buttons'>
                    <button className='button' onClick={props.handlerStepDown}>Back</button>
                    <button className='button' onClick={props.handlerStepUp}>Next</button>
                </div>
            </div>
        </>
    )
}

export default FormStep2;