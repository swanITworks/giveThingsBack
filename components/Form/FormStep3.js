import React, {useState} from "react";
import FormStep3SelectTowns from "./FormStep3SelectTowns";
import WhomHelpRadio from "./FormStep3WhomHelpRadio";

function FormStep3(props) {

    const handlerSelectStep3Who = props.handlerSelectStep3Who;
    const selectedOptionStep3Who = props.selectedOptionStep3Who;

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
                        <FormStep3SelectTowns/>
                    </div>
                    <h3>Who do you want to help?</h3>
                    <ul>
                        <li><WhomHelpRadio id={'option1'} handlerSelectStep3Who={handlerSelectStep3Who}
                                           selectedOptionStep3Who={selectedOptionStep3Who} text={'kids'}/></li>
                        <li><WhomHelpRadio id={'option2'} handlerSelectStep3Who={handlerSelectStep3Who}
                                           selectedOptionStep3Who={selectedOptionStep3Who} text={'alone mothers'}/></li>
                        <li><WhomHelpRadio id={'option3'} handlerSelectStep3Who={handlerSelectStep3Who}
                                           selectedOptionStep3Who={selectedOptionStep3Who} text={'homeless people'}/></li>
                        <li><WhomHelpRadio id={'option4'} handlerSelectStep3Who={handlerSelectStep3Who}
                                           selectedOptionStep3Who={selectedOptionStep3Who} text={'disabled people'}/></li>
                        <li><WhomHelpRadio id={'option5'} handlerSelectStep3Who={handlerSelectStep3Who}
                                           selectedOptionStep3Who={selectedOptionStep3Who} text={'older people'}/></li>
                    </ul>
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