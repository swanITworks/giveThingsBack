import React, {useState} from 'react';
import {useMediaQuery} from 'react-responsive';

const options = [
    {label: 1},
    {label: 2},
    {label: 3},
    {label: 4},
    {label: 5},
];

const DesktopAndTablet = ({children}) => {
    const isDesktop = useMediaQuery({minWidth: 768});
    return isDesktop ? children : null
};

const Mobile = ({children}) => {
    const isMobile = useMediaQuery({maxWidth: 767});
    return isMobile ? children : null
};

function MySelect(props) {

    const selectedOptionStep2 = props.selectedOptionStep2;
    const handlerSelectStep2 = props.handlerSelectStep2;
    const [isClicked, setIsClicked] = useState(false);
    const handlerShowOptions = () => {
        setIsClicked(prevState => !prevState);
    };

    const ShowOptions = (props) => {
        return options.map(item => {
            return (
                <div className='option' key={item.label} id={item.label} onClick={props.handlerSelect}>{item.label}</div>
            )
        })
    };

    const handlerTwoFunctions = (target) => {
        handlerShowOptions();
        handlerSelectStep2(target);
    };

    return (
        <>
            <DesktopAndTablet>
                <div onClick={handlerShowOptions} className='select' >
                    <div style={{display: 'flex'}}>
                        {selectedOptionStep2 === 'choose' ?
                            <>
                                <div className='crossOut'></div>
                                <div style={{fontSize: '1.5rem'}}>{selectedOptionStep2}</div>
                                <div className='crossOut'></div>
                            </>
                            : <div style={{fontSize: '1.5rem'}}>{selectedOptionStep2}</div>}
                    </div>
                    <div className='arrow'></div>
                </div>
                {isClicked == true ? <div onMouseLeave={handlerShowOptions} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'right',
                    border: '1px solid black',
                    alignItems: 'flexEnd',
                    justifyContent: 'flexEnd',
                    marginTop: '0.5rem',
                    position: 'absolute',
                    transform: 'translateY(3rem)',
                }}><ShowOptions handlerSelect={(e) => {
                    handlerTwoFunctions(e.target)
                }}/></div> : null}
            </DesktopAndTablet>
            <Mobile>
                <div onClick={handlerShowOptions} className='select'>
                    <div style={{display: 'flex'}}>
                        {selectedOptionStep2 === 'choose' ?
                            <>
                                <div className='crossOut'></div>
                                <div style={{fontSize: '0.8rem'}}>{selectedOptionStep2}</div>
                                <div className='crossOut'></div>
                            </>
                            : <div style={{fontSize: '0.8rem'}}>{selectedOptionStep2}</div>}
                    </div>
                    <div className='arrow'></div>
                </div>
                {isClicked == true ? <div onMouseLeave={handlerShowOptions} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'right',
                    border: '1px solid black',
                    alignItems: 'flexEnd',
                    justifyContent: 'flexEnd',
                    marginTop: '0.2rem',
                    position: 'absolute',
                    transform: 'translateY(2rem)',
                }}><ShowOptions handlerSelect={(e) => {
                    handlerTwoFunctions(e.target)
                }}/></div> : null}
            </Mobile>
        </>
    )
}

export default MySelect;