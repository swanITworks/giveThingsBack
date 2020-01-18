import React, {useState} from "react";

function WhomHelpRadio(props) {
    const id = props.id;
    const selectedOptionStep3Who = props.selectedOptionStep3Who;
    const text = props.text;
    const handlerSelectStep3WhoTrue = props.handlerSelectStep3WhoTrue;
    const handlerSelectStep3WhoFalse = props.handlerSelectStep3WhoFalse;

    if (selectedOptionStep3Who) {
        return (
            <div id={id} onClick={handlerSelectStep3WhoFalse} className='formStep3WhomWeHelpItem' style={{backgroundColor: '#FAD648'}}>{text}</div>
        )
    } else {
        return <div id={id} onClick={handlerSelectStep3WhoTrue} className='formStep3WhomWeHelpItem'>{text}</div>
    }
}

export default WhomHelpRadio;
