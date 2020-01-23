import React, {useState} from "react";
import FormStep3SelectTowns from "./FormStep3SelectTowns";
import WhomHelpRadio from "./FormStep3WhomHelpRadio";

function FormStep3(props) {

    const selectedOptionStep3Town = props.selectedOptionStep3Town;
    const handlerSelectStep3Town = props.handlerSelectStep3Town;
    const selectedOptionStep3Who = props.selectedOptionStep3Who;
    const optionsStep3 = props.optionsStep3;
    const inputsData = props.inputsData;
    const handlerInputOnChange = props.handlerInputOnChange;
    const handlerSelectStep3WhoTrue = props.handlerSelectStep3WhoTrue;
    const handlerSelectStep3WhoFalse = props.handlerSelectStep3WhoFalse;
    const selectedArray = props.selectedArray;

    const [warning, setWarning] = useState('');
    const [warning2, setWarning2] = useState('');

    const handlerClick = () => {
        if (selectedOptionStep3Town !== 'choose' || inputsData.organization !== '') {
            if (selectedArray.length !== 0) {
                props.handlerStepUp()
            } else {
                setWarning(null);
                let newWarning2 = <div className='warning'>Please choose who you would you like to help.</div>;
                setWarning2(newWarning2)
            }
        } else {
            let newWarning = <div className='warning'>Please choose localization or put name of foundation.</div>;
            setWarning(newWarning)
        }
    };

    return (
        <>
            <div className='FormStep3Warning'>
                <h2>Important!</h2>
                <p>If you know who you want to help, you can enter the name of this organization in the search engine.
                    You can also filter organizations
                    by their location or the purpose of their help.</p>
            </div>
            <div className='Step3'>
                <div className='topStep3'>
                    <p className='stepNumber'>Step 3/4</p>
                    <h2>Localization:</h2>
                    <div>
                        <FormStep3SelectTowns selectedOptionStep3Town={selectedOptionStep3Town}
                                              handlerSelectStep3Town={handlerSelectStep3Town}/>
                    </div>
                    <h3 className='helpTitle'>Who do you want to help?</h3>
                    <ul>
                        <li><WhomHelpRadio id='option1' handlerSelectStep3WhoTrue={handlerSelectStep3WhoTrue}
                                           handlerSelectStep3WhoFalse={handlerSelectStep3WhoFalse}
                                           selectedOptionStep3Who={selectedOptionStep3Who.option1}
                                           text={optionsStep3[0]}/></li>
                        <li><WhomHelpRadio id='option2' handlerSelectStep3WhoTrue={handlerSelectStep3WhoTrue}
                                           handlerSelectStep3WhoFalse={handlerSelectStep3WhoFalse}
                                           selectedOptionStep3Who={selectedOptionStep3Who.option2}
                                           text={optionsStep3[1]}/></li>
                        <li><WhomHelpRadio id='option3' handlerSelectStep3WhoTrue={handlerSelectStep3WhoTrue}
                                           handlerSelectStep3WhoFalse={handlerSelectStep3WhoFalse}
                                           selectedOptionStep3Who={selectedOptionStep3Who.option3}
                                           text={optionsStep3[2]}/></li>
                        <li><WhomHelpRadio id='option4' handlerSelectStep3WhoTrue={handlerSelectStep3WhoTrue}
                                           handlerSelectStep3WhoFalse={handlerSelectStep3WhoFalse}
                                           selectedOptionStep3Who={selectedOptionStep3Who.option4}
                                           text={optionsStep3[3]}/></li>
                        <li><WhomHelpRadio id='option5' handlerSelectStep3WhoTrue={handlerSelectStep3WhoTrue}
                                           handlerSelectStep3WhoFalse={handlerSelectStep3WhoFalse}
                                           selectedOptionStep3Who={selectedOptionStep3Who.option5}
                                           text={optionsStep3[4]}/></li>
                    </ul>
                    <h3 className='helpTitle'>Enter the name of a specific organization (optional)</h3>
                    <input type='text' name='organization' value={inputsData.organization}
                           onChange={handlerInputOnChange}/>
                </div>
                <div className='bottomStep3'>
                    <div>
                        {warning}
                        {warning2}
                    </div>
                    <div className='buttons'>
                        <div className='button' onClick={props.handlerStepDown}>Back</div>
                        <div className='button' onClick={handlerClick}>Next</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormStep3;