import React, {useState} from "react";
import MyRadio from "./FormMyRadio";

function FormStep1(props) {

    const handlerSelectStep1 = props.handlerSelectStep1;
    const selectedOptionStep1 = props.selectedOptionStep1;

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
                        <li><MyRadio id={'option1'} handlerSelectStep1={handlerSelectStep1} selectedOptionStep1 = {selectedOptionStep1}/><label className='container'>clothes that can be used again</label></li>
                        <li><MyRadio id={'option2'} handlerSelectStep1={handlerSelectStep1} selectedOptionStep1 = {selectedOptionStep1}/><label className='container'>clothes to throw away</label></li>
                        <li><MyRadio id={'option3'} handlerSelectStep1={handlerSelectStep1} selectedOptionStep1 = {selectedOptionStep1}/><label className='container'>toys</label></li>
                        <li><MyRadio id={'option4'} handlerSelectStep1={handlerSelectStep1} selectedOptionStep1 = {selectedOptionStep1}/><label className='container'>books</label></li>
                        <li><MyRadio id={'option5'} handlerSelectStep1={handlerSelectStep1} selectedOptionStep1 = {selectedOptionStep1}/><label className='container'>others</label></li>
                    </ul>
                </div>
                <button className='button' onClick={props.handlerStepUp}>Next</button>
            </div>
        </>
    )
}

export default FormStep1;