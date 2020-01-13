import React from "react";

const MobileHomeContact = () => {
    return (
      <div className='mobileHomeContact' name='contact'>
          <img className='logo' src='../../../assets/Home-Hero-Image.jpg'/>
          <div className='contact'>
              <p>Contact with Us</p><i className="fas fa-phone"></i><i className="fas fa-envelope"></i>
          </div>
          <div className='regulations'>
              <p>Regulations</p>
              <p>Privacy Policy</p>
              <p>Instructions on how to pack items to be given</p>
          </div>
      </div>
    )
};

export default MobileHomeContact;