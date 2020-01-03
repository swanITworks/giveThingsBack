import React, {useEffect, useState, useCallback} from "react";

function FormStep4(props) {

    const inputsData = props.inputsData;
    const handlerInputOnChange = props.handlerInputOnChange;
    const [warnings, setWarnings] = useState(['']);

    const validateInputs = () => {

        const newWarnings = [];

        if (inputsData.street.length < 3) {
            const newWarning = <div className='warning'>Street should have minimum 2 characters</div>;
            newWarnings.push(newWarning)
        }

        if (inputsData.town.length < 3) {
            const newWarning = <div className='warning'>Town should have minimum 2 characters</div>;
            newWarnings.push(newWarning)
        }
        if (inputsData.postCode.length < 5) {
            const newWarning = <div className='warning'>Post code should have minimum 5 characters</div>;
            newWarnings.push(newWarning)
        }
        if (inputsData.phoneNumber.length !== 9 || typeof inputsData.phoneNumber === 'string') {
            const newWarning = <div className='warning'>Phone number should have only 9 digits</div>;
            newWarnings.push(newWarning)
        }
        ;
        setWarnings([...newWarnings]);
    };

    const handlerClick = () => {
        validateInputs();
    };

    useEffect(()=>{if(warnings.length==0){props.handlerStepUp()}},[warnings]);

    return (
        <>
            <div className='FormStep4Warning'>
                <h2>Important!</h2>
                <p>Enter the address and date of collection the item.</p>
            </div>
            <div className='Step4'>
                <div>
                    <p>Step 4/4</p>
                    <h2>Provide the address and date of receipt by courier</h2>
                    <div className='realizationData'>
                        <div className='address'>
                            <h3>Collection address</h3>
                            <ul>
                                <li><label>Street</label><input type='text' name='street'
                                                                value={inputsData.street}
                                                                onChange={handlerInputOnChange}/></li>
                                <li><label>Town</label><input type='text' name='town' value={inputsData.town}
                                                              onChange={handlerInputOnChange}/></li>
                                <li><label>Post code</label><input type='numbers' name='postCode'
                                                                   value={inputsData.postCode}
                                                                   onChange={handlerInputOnChange}/></li>
                                <li><label>Phone number</label><input type='numbers' name='phoneNumber'
                                                                      value={inputsData.phoneNumber}
                                                                      onChange={handlerInputOnChange} pattern='[0-9]'
                                                                      required/></li>
                            </ul>
                        </div>
                        <div className='term'>
                            <h3>Collection term</h3>
                            <ul>
                                <li><label>Date</label><input type='date' name='date'
                                                              value={inputsData.date}
                                                              onChange={handlerInputOnChange}/></li>
                                <li><label>Time</label><input type='time' name='time' value={inputsData.time}
                                                              onChange={handlerInputOnChange}/></li>
                                <li><label>Information for courier company</label><textarea type='text' name='info'
                                                                                            value={inputsData.info}
                                                                                            onChange={handlerInputOnChange}/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {warnings.length > 0 && warnings.map(item => item)}
                <div className='buttons'>
                    <div className='button' onClick={props.handlerStepDown}>Back</div>
                    <div className='button' onClick={handlerClick}>Next</div>
                </div>
            </div>
        </>
    )
}

export default FormStep4;