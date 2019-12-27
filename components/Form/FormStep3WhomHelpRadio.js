import React, {useState} from "react";

function WhomHelpRadio (props) {
    const handlerSelectStep3 = props.handlerSelectStep3;
    const id = props.id;
    const selectedOptionStep3 = props.selectedOptionStep3;

    if (selectedOptionStep3 === id) {
        return (
            <div id={id} onClick={handlerSelectStep3} className='myRadio' style={{backgroundColor: '#FAD648'}}></div>
        )
    } else {
        return <div id={id} onClick={handlerSelectStep3} className='myRadio'></div>
    }
}

export default WhomHelpRadio;
