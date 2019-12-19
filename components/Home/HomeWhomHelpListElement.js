import React from "react";

function HomeWhomHelpListElement(props) {
    return (
        <>
            <li>
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