import React, {useEffect, useState} from "react";

function FormStep4(props) {

    const inputsData = props.inputsData;
    const handlerInputOnChange = props.handlerInputOnChange;
    const [warnings, setWarnings] = useState(['']);
    const date = new Date();
    const actualDatePlus4 = date.getFullYear() + '-' + '0' + (date.getMonth() + 1) + '-' + '0' + (date.getDate() + 4);
    const actualDatePlus5 = date.getFullYear() + '-' + '0' + (date.getMonth() + 1) + '-' + '0' + (date.getDate() + 5);


    const validateInputs = () => {
        const isNum = /^\d+$/.test(inputsData.phoneNumber);
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

        if (inputsData.phoneNumber.length !== 9 || isNum === false) {
            const newWarning = <div className='warning'>Phone number should have only 9 digits</div>;
            newWarnings.push(newWarning)
        }

        if (inputsData.date <= actualDatePlus4) {
            const newWarning = <div className='warning'>We need 5 days to organize collection. Date of collection should
                be 5 days from today</div>;
            newWarnings.push(newWarning)
        }

        if (inputsData.time.length < 3) {
            const newWarning = <div className='warning'>Please select time of collection from 8 AM to 6 PM</div>;
            newWarnings.push(newWarning)
        }

        setWarnings([...newWarnings]);
    };

    const handlerClick = () => {
        validateInputs();
    };

    useEffect(() => {
        if (warnings.length == 0) {
            props.handlerStepUp()
        }
    }, [warnings]);

    return (
        <>
            <div className='FormStep4Warning'>
                <h2>Important!</h2>
                <p>Enter the address and date of collection the item.</p>
            </div>
            <div className='step4'>
                <div>
                    <p className='stepNumber'>Step 4/4</p>
                    <h2 className='stepNumber'>Provide the address and date of receipt by courier</h2>
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
                                                              onChange={handlerInputOnChange} min={actualDatePlus5}/>
                                </li>
                                <li><label>Time</label><input type='time' name='time' value={inputsData.time}
                                                              onChange={handlerInputOnChange} min="08:00" max="16:00"
                                                              step="900" required/></li>
                                <li><label>Information for courier company (optional)</label><textarea type='text' name='info'
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