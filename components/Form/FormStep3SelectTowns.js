import React, {useState} from 'react';

const options = [
    {label: 'London'},
    {label: 'Manchester'},
    {label: 'Liverpool'},
    {label: 'Leeds'},
    {label: 'Blackpool'},
];

function FormStep3SelectTowns(props) {

    const selectedOptionStep3Town = props.selectedOptionStep3Town;
    const handlerSelectStep3Town = props.handlerSelectStep3Town;

    const [isClicked, setIsClicked] = useState(false);
    // const [selected, setSelected] = useState('choose');
    const handlerShowOptions = () => {
        setIsClicked(prevState => !prevState);
    };
    // const handlerSelectOption = (target) => {
    //     setSelected(target.id)
    // };

    const select = {
        border: '1px solid black',
        padding: '0.5rem',
        width: '15rem',
        display: 'flex',
        justifyContent: 'space-between',
        cursor: 'pointer',
        marginBottom: '1rem',
    };

    const arrow = {
        borderLeft: '2px solid black',
        borderBottom: '2px solid black',
        borderRadius: '2px',
        width: '1rem',
        height: '1rem',
        transform: "translateY(-0.05rem) rotate(315deg)",
        marginRight: '0.5rem',
    };

    const crossOut = {
        borderBottom: '1px solid black',
        width: '2rem',
        transform: 'translateY(-0.5rem)',
    };

    const ShowOptions = (props) => {
        return options.map(item => {
            return <div className='option' key={item.label} id={item.label} onClick={props.handlerSelect}
                        style={{margin: '0.5rem', width: '3rem', textAlign: 'center'}}>{item.label}</div>
        })
    };

    const handlerTwoFunctions = (target) => {
        handlerShowOptions();
        handlerSelectStep3Town(target);
    };

    return (
        <>
            <div onClick={handlerShowOptions} style={select}>
                <div style={{display: 'flex'}}>
                    {selectedOptionStep3Town === 'choose' ?
                        <>
                            <div style={crossOut}></div>
                            <div style={{fontSize: '1.5rem'}}>{selectedOptionStep3Town}</div>
                            <div style={crossOut}></div>
                        </>
                        : <div style={{fontSize: '1.5rem'}}>{selectedOptionStep3Town}</div>}
                </div>
                <div style={arrow}></div>
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
        </>
    )
}

export default FormStep3SelectTowns;