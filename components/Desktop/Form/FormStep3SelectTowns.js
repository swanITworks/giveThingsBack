import React, {useState} from 'react';
import {useMediaQuery} from "react-responsive";

const options = [
    {label: 'London'},
    {label: 'Manchester'},
    {label: 'Liverpool'},
    {label: 'Leeds'},
    {label: 'Blackpool'},
];

const DesktopAndTablet = ({children}) => {
    const isDesktop = useMediaQuery({minWidth: 768});
    return isDesktop ? children : null
};

const Mobile = ({children}) => {
    const isMobile = useMediaQuery({maxWidth: 767});
    return isMobile ? children : null
};

function FormStep3SelectTowns(props) {

    const selectedOptionStep3Town = props.selectedOptionStep3Town;
    const handlerSelectStep3Town = props.handlerSelectStep3Town;

    const [isClicked, setIsClicked] = useState(false);
    const handlerShowOptions = () => {
        setIsClicked(prevState => !prevState);
    };

    const ShowOptions = (props) => {
        return options.map(item => {
            return <div className='optionTown' key={item.label} id={item.label} onClick={props.handlerSelect}>{item.label}</div>
        })
    };

    const handlerTwoFunctions = (target) => {
        handlerShowOptions();
        handlerSelectStep3Town(target);
    };

    return (
        <>
            <DesktopAndTablet>
                <div onClick={handlerShowOptions} className='select'>
                    <div style={{display: 'flex'}}>
                        {selectedOptionStep3Town === 'choose' ?
                            <>
                                <div className='crossOut'></div>
                                <div style={{fontSize: '1.5rem'}}>{selectedOptionStep3Town}</div>
                                <div className='crossOut'></div>
                            </>
                            : <div style={{fontSize: '1.5rem'}}>{selectedOptionStep3Town}</div>}
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
                    position: 'absolute',
                    transform: 'translateY(0.0rem)',
                    width: '15rem',
                    backgroundColor: '#F0F1F1',
                    zIndex: 1,
                }}><ShowOptions handlerSelect={(e) => {
                    handlerTwoFunctions(e.target)
                }}/></div> : null}
            </DesktopAndTablet>
            <Mobile>
                <div onClick={handlerShowOptions} className='selectTown'>
                    <div style={{display: 'flex'}}>
                        {selectedOptionStep3Town === 'choose' ?
                            <>
                                <div className='crossOut'></div>
                                <div style={{fontSize: '0.8rem'}}>{selectedOptionStep3Town}</div>
                                <div className='crossOut'></div>
                            </>
                            : <div style={{fontSize: '0.8rem'}}>{selectedOptionStep3Town}</div>}
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
                    transform: 'translateY(0.2rem)',
                    backgroundColor: 'white',
                    zIndex: 1,
                }}><ShowOptions handlerSelect={(e) => {
                    handlerTwoFunctions(e.target)
                }}/></div> : null}
            </Mobile>
        </>
    )
}

export default FormStep3SelectTowns;