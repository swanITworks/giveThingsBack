import React, {useState} from "react";
import FormStep3SelectTowns from "./FormStep3SelectTowns";
import WhomHelpRadio from "./FormStep3WhomHelpRadio";

function FormStep3(props) {

    const handlerSelectStep3Who = props.handlerSelectStep3Who;
    const selectedOptionStep3Who = props.selectedOptionStep3Who;
    const selectedOptionStep3Town = props.selectedOptionStep3Town;
    const handlerSelectStep3Town = props.handlerSelectStep3Town;
    const optionsStep3 = props.optionsStep3;
    const inputsData = props.inputsData;
    const handlerInputOnChange = props.handlerInputOnChange;

    return (
        <>
            <div className='FormStep3Warning'>
                <h2>Important!</h2>
                <p>If you know who you want to help, you can enter the name of this organization in the search engine.
                    You can also filter organizations
                    by their location or the purpose of their help.</p>
            </div>
            <div className='Step3'>
                <div>
                    <p>Step 3/4</p>
                    <h2>Localization:</h2>
                    <div className='selectTown'>
                        <FormStep3SelectTowns selectedOptionStep3Town={selectedOptionStep3Town}
                                              handlerSelectStep3Town={handlerSelectStep3Town}/>
                    </div>
                    <h3>Who do you want to help?</h3>
                    <ul>
                        <li><WhomHelpRadio id={optionsStep3[0]} handlerSelectStep3Who={handlerSelectStep3Who}
                                           selectedOptionStep3Who={selectedOptionStep3Who} text={optionsStep3[0]}/></li>
                        <li><WhomHelpRadio id={optionsStep3[1]} handlerSelectStep3Who={handlerSelectStep3Who}
                                           selectedOptionStep3Who={selectedOptionStep3Who} text={optionsStep3[1]}/></li>
                        <li><WhomHelpRadio id={optionsStep3[2]} handlerSelectStep3Who={handlerSelectStep3Who}
                                           selectedOptionStep3Who={selectedOptionStep3Who} text={optionsStep3[2]}/></li>
                        <li><WhomHelpRadio id={optionsStep3[3]} handlerSelectStep3Who={handlerSelectStep3Who}
                                           selectedOptionStep3Who={selectedOptionStep3Who} text={optionsStep3[3]}/></li>
                        <li><WhomHelpRadio id={optionsStep3[4]} handlerSelectStep3Who={handlerSelectStep3Who}
                                           selectedOptionStep3Who={selectedOptionStep3Who} text={optionsStep3[4]}/></li>
                    </ul>
                    <h3>Enter the name of a specific organization (optional)</h3>
                    <input type='text' name='organization' value={inputsData.organization}
                           onChange={handlerInputOnChange}/>
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