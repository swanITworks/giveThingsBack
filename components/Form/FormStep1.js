import React, {useState} from "react";

function FormStep1(props) {

    const selectedOption = props.selectedOption;
    const handlerSelect = props.handlerSelect;

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
                        <li><input type='radio' value='option1' name='chooseStuff'
                                   checked={selectedOption === 'option1'}
                                   onClick={handlerSelect}/><label className='container'>clothes that can be used
                            again</label></li>
                        <li><input type='radio' value='option2' name='chooseStuff'
                                   checked={selectedOption === 'option2'}
                                   onClick={handlerSelect}/><label className='container'>clothes to throw away</label>
                        </li>
                        <li><input type='radio' value='option3' name='chooseStuff'
                                   checked={selectedOption === 'option3'}
                                   onClick={handlerSelect}/><label className='container'>toys</label></li>
                        <li><input type='radio' value='option4' name='chooseStuff'
                                   checked={selectedOption === 'option4'}
                                   onClick={handlerSelect}/><label className='container'>books</label></li>
                        <li><input type='radio' value='option5' name='chooseStuff'
                                   checked={selectedOption === 'option5'}
                                   onClick={handlerSelect}/><label className='container'>others</label></li>
                    </ul>
                </div>
                <button className='button' onClick={props.handlerStepUp}>Next</button>
            </div>
        </>
    )
}

export default FormStep1;