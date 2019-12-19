import React from "react";
import {NavLink} from "react-router-dom";

function HomeFourSteps() {
    return (
        <div name='fourSteps' className='homeFourSteps' id='fourSteps'>
            <div className='headerFourSteps'>
                <h2>Four simple steps are enough.</h2>
                <img src='../../assets/Decoration.svg'/>
            </div>
            <div className='steps'>
                <div className='step'>
                    <img src='../../assets/Icon-1.svg'/>
                    <h4>Choose stuff</h4>
                    <div className='line'></div>
                    <p>cloths, toys, equipment, and other</p>
                </div>
                <div className='step'>
                    <img src='../../assets/Icon-2.svg'/>
                    <h4>Pack them</h4>
                    <div className='line'></div>
                    <p>use garbage bags</p>
                </div>
                <div className='step'>
                    <img src='../../assets/Icon-3.svg'/>
                    <h4>Decide who you want help with</h4>
                    <div className='line'></div>
                    <p>choose a trusted place</p>
                </div>
                <div className='step'>
                    <img src='../../assets/Icon-4.svg'/>
                    <h4>Order a courier</h4>
                    <div className='line'></div>
                    <p>courier collect items at convenient time</p>
                </div>
            </div>
            <div className='homeFourStepsButton'>
                <NavLink exact to="/" activeClassName="active" className='button'>GIVE BACK STUFF</NavLink>
            </div>
        </div>
    )
}

export default HomeFourSteps;