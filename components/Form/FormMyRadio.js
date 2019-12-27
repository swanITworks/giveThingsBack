import React, {useState} from "react";

function MyRadio(props) {
    const handlerSelectStep1 = props.handlerSelectStep1;
    const id = props.id;
    const selectedOptionStep1 = props.selectedOptionStep1;

    if (selectedOptionStep1 === id) {
        return (
            <div id={id} onClick={handlerSelectStep1} className='myRadio' style={{backgroundColor: '#FAD648'}}></div>
        )
    } else {
        return <div id={id} onClick={handlerSelectStep1} className='myRadio'></div>
    }
}

export default MyRadio;
