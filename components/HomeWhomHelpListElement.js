import React from "react";

function HomeWhomHelpListElement(props) {
    return (
        <>
            <li>{props.name}{props.description}{props.place}</li>
        </>
    )
}

export default HomeWhomHelpListElement;