import React, {useState} from "react";

function WhomHelpRadio(props) {
    const handlerSelectStep3Who = props.handlerSelectStep3Who;
    const id = props.id;
    const selectedOptionStep3Who = props.selectedOptionStep3Who;
    const text = props.text;

    if (selectedOptionStep3Who === id) {
        return (
            <div id={id} onClick={handlerSelectStep3Who} className='formStep3WhomWeHelpItem' style={{backgroundColor: '#FAD648'}}>{text}</div>
        )
    } else {
        return <div id={id} onClick={handlerSelectStep3Whos} className='formStep3WhomWeHelpItem'>{text}</div>
    }
}

export default WhomHelpRadio;
