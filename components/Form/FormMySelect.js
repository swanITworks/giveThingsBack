import React, {useState} from 'react';

const options = [
    {label: 1},
    {label: 2},
    {label: 3},
    {label: 4},
    {label: 5},
];

function MySelect() {


    const [isClicked, setIsClicked] = useState(false);
    const [selected, setSelected] = useState('choose');

    const handlerShowOptions = () => {
        setIsClicked(prevState => !prevState);
    };

    const handlerSelectOption = (target) => {
        setSelected(target.id)
    };

    const select = {
        border: '1px solid black',
        padding: '0.5rem',
        marginLeft: '0.5rem',
        width: '15rem',
        display: 'flex',
        justifyContent: 'space-between'
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
            return <div key={item.label} id={item.label} onClick={props.handlerSelect} style={{margin: '0.5rem 0rem'}}>{item.label}</div>
        })
    };

    const handlerTwoFunctions = (target) => {
      handlerShowOptions();
        handlerSelectOption(target);
    };

    return (
        <>
            <div onClick={handlerShowOptions} style={select}>
                <div style={{display: 'flex'}}>
                    {selected === 'choose' ?
                    <>
                    <div style={crossOut}></div>
                    <div style={{fontSize: '1.5rem'}}>{selected}</div>
                    <div style={crossOut}></div>
                    </>
 : <div style={{fontSize: '1.5rem'}}>{selected}</div> }
                </div>
                <div style={arrow}></div>
            </div>
            {isClicked == true ? <div style={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'right',
                border: '1px solid black',
                alignItems: 'flexEnd',
                justifyContent: 'flexEnd',
                marginTop: '0.5rem',
                padding: '0 1rem',
                position: 'absolute',
                transform: 'translateY(3rem)',
            }}><ShowOptions handlerSelect={(e)=>{handlerTwoFunctions(e.target)}}/></div> : null}


        </>
    )

}

export default MySelect;