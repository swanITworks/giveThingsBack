import React from "react";
import HomeWhomHelpListElement from "./HomeWhomHelpListElement";

function HomeWhomWeHelpList(props) {
    return (

        <ul className='homeWhomWeHelpList'>
            {props.data.map(item=>{
                return <HomeWhomHelpListElement key={item.id} name={item.name} description={item.description} place={item.place}/>
            })}
        </ul>
    )
}

export default HomeWhomWeHelpList;