import React from "react";
import {Link} from "react-router-dom";

const MobileHomeHeader = () => {
    return (
      <div className='mobileHomeHeader'>
          <h2>Do you have things at home that you don't know what to do?</h2>
          <h1>GIVE THEM TO THE NEEDED</h1>
          <h3> - quickly and in trusted hands</h3>
          <Link exact to="/signIn" className='button'>SING IN</Link>
      </div>
    )
};

export default MobileHomeHeader;