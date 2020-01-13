import React from "react";

const MobileHomeFourSteps = () => {
    return (
        <div className='mobileHomeFourSteps' name='fourSteps'>
            <div className='headerFourSteps'>
                <h2>Four simple steps are enough.</h2>
            </div>
            <div className='steps'>
                <div className='step'>
                    <img src='../../../assets/Icon-1.svg'/>
                    <div>
                        <h4>Choose stuff</h4>
                    </div>
                </div>
                <div className='step'>
                    <img src='../../../assets/Icon-2.svg'/>
                    <div>
                        <h4>Pack them</h4>
                    </div>
                </div>
                <div className='step'>
                    <img src='../../../assets/Icon-3.svg'/>
                    <div>
                        <h4>Decide who do you want help with</h4>
                    </div>
                </div>
                <div className='step'>
                    <img src='../../../assets/Icon-4.svg'/>
                    <div>
                        <h4>Order a courier</h4>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MobileHomeFourSteps;