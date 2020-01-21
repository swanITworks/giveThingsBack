import React from "react";
import {NavLink} from "react-router-dom";

const MobileFormHeader = () => {
    return (
        <div className='mobileFormHeader'>
            <h1>START HELP NOW</h1>
            <h2>Give back stuff in the right hand.</h2>
            <div className='circles'>
                <div className='circle'>5
                </div>
                <div className='circle'>7
                </div>
                <div className='circle'>9
                </div>
            </div>
            <div className='circlesDescriptions'>
                <div className='description'>completed<br/>bags</div>
                <div className='description'>supported<br/> organizations</div>
                <div className='description'>organized<br/> collections</div>
            </div>
            <div className='buttonsHeader'>
                <NavLink exact to="/form"><button>GIVE STUFF BACK</button></NavLink>
                <button>ORGANIZE<br/>COLLECTION</button>
            </div>
        </div>
    )
};

export default MobileFormHeader;