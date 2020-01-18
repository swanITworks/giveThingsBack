import React from "react";

function HomeWhomHelpListElement(props) {

 const id = props.id;
 const elementsPerSite = props.elementsPerSite;

    return (
        <>
            <li style={elementsPerSite === id+1 ? {borderBottom:'none'}:null}>
                <div className='leftSide'>
                    <div className='name'>{props.name}</div>
                    <div className='mission'>{props.description}</div>
                </div>
                <div className='rightSide'>
                    <div className='stuff'>{props.place}</div>
                </div>
            </li>
        </>
    )
}

export default HomeWhomHelpListElement;