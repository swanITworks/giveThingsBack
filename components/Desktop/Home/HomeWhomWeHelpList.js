import React, {useState} from "react";
import HomeWhomHelpListElement from "./HomeWhomHelpListElement";

function HomeWhomWeHelpList(props) {

    const [showSite, setShowSite] = useState(1);

    const myData = props.data;
    const [...myArray] = myData;
    const elementsPerSite = 3;
    const quantityOfSites = Math.ceil(myArray.length / elementsPerSite);

    function showSites() {

        if (quantityOfSites === 1) {
            return <div>{myArray.map((item,index) => {
                return <HomeWhomHelpListElement key={index} id={index} elementsPerSite = {elementsPerSite} name={item.name} description={item.description} place={item.place}/>
            })}</div>
        } else if (showSite === 1 && quantityOfSites === 1) {

            return (
                <div><p>{showSite}</p>{myArray.slice(0, elementsPerSite).map((item,index) => {
                    return <HomeWhomHelpListElement key={index} id={index} elementsPerSite = {elementsPerSite} name={item.name} description={item.description} place={item.place}/>
                })}
                </div>
            )
        } else if (showSite <= quantityOfSites) {
            return <>
                {myArray.slice((showSite * elementsPerSite) - elementsPerSite, showSite * elementsPerSite).map((item,index) => {
                return <HomeWhomHelpListElement key={index} id={index} elementsPerSite = {elementsPerSite} name={item.name} description={item.description} place={item.place}/>
            })}
                <div className='siteButtons'>{showButtons(quantityOfSites)}</div></>
        } else return <p>This site no exist</p>
    }

    function showButtons(quantity) {
        const buttons = [];
        for (let i = 1; i <= quantity; i++) {
            buttons.push(<button key={i} onClick={()=>setShowSite(i)} id={i} style={showSite === i ? {border: '1px solid black'} : null}>{i}</button>)
        }
        ;
        return buttons.map(item => {
            return item
        })
    }

    return showSites();
}

export default HomeWhomWeHelpList;