import React, {useState} from "react";

function FormStep4(props) {

    const collectionAddress = props.collectionAddress;
    const handlerInputOnChange = props.handlerInputOnChange;

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
                                <li><label>Street</label><input type='text' name='street' value={collectionAddress.street} onChange={handlerInputOnChange}/></li>
                                <li><label>Town</label><input type='text' name='town' value={collectionAddress.town}/></li>
                                <li><label>Post code</label><input type='text' name='postCode' value={collectionAddress.postCode}/>/></li>
                                <li><label>Phone number</label><input type='text' name='phoneNumber' value={collectionAddress.phoneNumber}/></li>
                            </ul>
                        </div>
                        <div className='term'>
                            <h3>Collection term</h3>
                            <ul>
                                <li><label>Date</label><input type='text'/></li>
                                <li><label>Time</label><input type='text'/></li>
                                <li><label>Information for courier company</label><textarea type='text'/></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='buttons'>
                    <button className='button' onClick={props.handlerStepDown}>Back</button>
                    <button className='button' onClick={props.handlerStepUp}>Next</button>
                </div>
            </div>
        </>
    )
}

export default FormStep4;