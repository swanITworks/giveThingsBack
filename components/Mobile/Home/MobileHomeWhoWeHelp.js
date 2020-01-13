import React from "react";

const MobileHomeWhoWeHelp = () => {
    return (
        <div className='mobileHomeWhoWeHelp' name='whomWeHelp'>
            <div className='headerFourSteps'>
                <h2>Whom do we help?</h2>
            </div>
            <div className='organizations'>
                <div className='organization'>
                    <div className='circle'>
                        FOUNDATIONS
                    </div>
                    <div className='description'>
                        <p>In our database you will find a list of verified foundations with which we cooperate. You
                            can check what they do, who they help and what they need.</p>
                    </div>
                </div>
                <div className='organization'>
                    <div className='circle'>NON-GOVERNMENTAL ORGANIZATIONS</div>
                    <div div className='description'>
                        <p>We also help all non-governmental and charity organizations that are not foundations. These
                            are our Partners who will make good use of the things that get to them.</p>
                    </div>
                </div>
                <div className='organization'>
                    <div className='circle'>LOCAL COLLECTIONS</div>
                    <div div className='description'>
                        <p>We support local collections organized by individual people who care about the good of the community in which they live. You can organize such a collection yourself and help those who are closest to you.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MobileHomeWhoWeHelp;