import React from "react";

function FormStep1() {
    return (
        <>
            <div className='FormStep1Warning'>
                <h2>Important!</h2>
                <p>Complete the details of your items. Thanks to this, we will know who is best to pass them on to.</p>
            </div>
            <div className='Step1'>
                <div className='wrapper'>
                    <p>Step 1/4</p>
                    <form>
                        <h2>Choose what do you want to get back:</h2>
                        <ul>
                            <li><label className='container'><div className='checkmark'></div><input type='radio'/>clothes that can be used
                                again</label></li>
                            <li><label className='container'><div className='checkmark'></div><input type='radio'/>clothes to throw away</label></li>
                            <li><label className='container'><div className='checkmark'></div><input type='radio'/>toys</label></li>
                            <li><label className='container'><div className='checkmark'></div><input type='radio'/>books</label></li>
                            <li><label className='container'><div className='checkmark'></div><input type='radio'/>others</label></li>
                        </ul>
                        <button>Next</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default FormStep1;