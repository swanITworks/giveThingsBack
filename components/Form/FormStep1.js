import React, {useState} from "react";
import MyRadio from "./FormMyRadio";

function FormStep1(props) {

    const handlerSelectStep1 = props.handlerSelectStep1;
    const selectedOptionStep1 = props.selectedOptionStep1;
    const optionsStep1 = props.optionsStep1;
    const [warning,setWarning] = useState('');

    const handlerClick = () => {
        if (selectedOptionStep1 !== '') {
            props.handlerStepUp()
        } else {
            let newWarning = <li className='warning' style={{backgroundColor:'#FAD648', width:'30rem', textAlign:'center', fontFamily:'OpenSans', fontSize:'1.5rem', padding:'1rem'}}>Please check one option before go further</li>;
            setWarning(newWarning)
        }
    };

    return (
        <>
            <div className='FormStep1Warning'>
                <h2>Important!</h2>
                <p>Complete the details of your items. Thanks to this, we will know who is best to pass them on to.</p>
            </div>
            <div className='Step1'>
                <div>
                    <p>Step 1/4</p>
                    <h2>Choose what do you want to get back:</h2>
                    <ul>
                        <li><MyRadio id={optionsStep1[0]} handlerSelectStep1={handlerSelectStep1}
                                     selectedOptionStep1={selectedOptionStep1}/><label
                            className='container'>{optionsStep1[0]}</label></li>
                        <li><MyRadio id={optionsStep1[1]} handlerSelectStep1={handlerSelectStep1}
                                     selectedOptionStep1={selectedOptionStep1}/><label
                            className='container'>{optionsStep1[1]}</label></li>
                        <li><MyRadio id={optionsStep1[2]} handlerSelectStep1={handlerSelectStep1}
                                     selectedOptionStep1={selectedOptionStep1}/><label
                            className='container'>{optionsStep1[2]}</label></li>
                        <li><MyRadio id={optionsStep1[3]} handlerSelectStep1={handlerSelectStep1}
                                     selectedOptionStep1={selectedOptionStep1}/><label
                            className='container'>{optionsStep1[3]}</label></li>
                        <li><MyRadio id={optionsStep1[4]} handlerSelectStep1={handlerSelectStep1}
                                     selectedOptionStep1={selectedOptionStep1}/><label
                            className='container'>{optionsStep1[4]}</label></li>
                        {warning}
                    </ul>
                </div>
                <div className='button'
                     onClick={handlerClick}>Next
                </div>
            </div>
        </>
    )
}

export default FormStep1;