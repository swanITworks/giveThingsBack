import React from "react";
import {Link} from "react-router-dom";

const MobileHomeSignIn = () => {
    return (
      <div className='mobileHomeSignIn'>
          <h2>You want to give your stuff or organize a local collection?</h2>
          <Link exact to="/signIn" className='button'>SING IN</Link>
      </div>
    )
};

export default MobileHomeSignIn;