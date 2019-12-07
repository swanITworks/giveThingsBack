import React from "react";

function HomeContactUs() {
    return (
        <div className='homeContactUs image'>
            <div className='content'>
                <h3>Contact with us</h3>
                <img src='../assets/Decoration.svg'/>
                <form>
                    <div className='topOfForm'>
                        <label>Write your name<input type='name' placeholder='name'/></label>
                        <label>Write your email<input type='email' placeholder='email'/></label>
                    </div>
                    <div className='mainForm'>
                        <label>Write your message<br/><textarea rows='5'
                                                                placeholder='Lorem ipsum dolor sit amet, consectetur
                                                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/></label>
                    </div>
                    <div className='sendButton'>Send
                    </div>
                </form>
            </div>
            <div className='copyright'>
                Copyright by Coders Lab
            </div>
            <div className='icons'>
                <img src='../assets/Facebook.svg'/>
                <img src='../assets/Instagram.svg'/>
            </div>
        </div>

    )
}

export default HomeContactUs;