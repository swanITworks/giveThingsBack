import React from "react";
import HomeWhomHelpListElement from "./HomeWhomHelpListElement";

function HomeWhomWeHelpList(props) {

    // <HomeWhomHelpListElement name={item.name} place={item.place} description={item.description}/>

    const items = props.data;

    function showList(items) {
        const sites = [];

        const quantityPerSite = 3;
        const quantityOfSites = Math.ceil(items.length / quantityPerSite);

        const [...myArray] = items;

        for (let i = 1; i <= quantityOfSites; i++) {
            if (i === 1) {
                sites.push(myArray.slice(i - 1, quantityPerSite * i));
            } else {
                sites.push(myArray.slice((i - 1) * quantityPerSite, quantityPerSite * i))
            }
        }

        const showButtons = (i) => {
            let toShow = [];
            for (let j = 1; j <= i; j++) {

                toShow.push(<button key={j} id={j} onClick={(e)=>{showSites(sites)}}>{j}</button>);
            }
            return toShow.map(item => {
                return item
            })
        };

        const showSites = (items,val) => {
            items.map(item=>console.log(item));

            const [site1, site2, site3] = items;
            return site1.map(item => {
                return <HomeWhomHelpListElement key={item.id} name={item.name} place={item.place} description={item.description}/>
            })
        };

        if (items.length <= 3) {
            return (

                items.map(item => {
                        return (
                            <HomeWhomHelpListElement key={item.id} name={item.name} description={item.description}
                                                     place={item.place}/>
                        )
                    }
                )
            )
        } else {

            return (
                <>
                    {showSites(sites,quantityOfSites)}
                    <div className='buttons'>
                    {showButtons(quantityOfSites)}
                    </div>
                </>
            )
        }
    }

    return (
        <ul className='homeWhomWeHelpList'>
            {showList(items)}
        </ul>
    )
}

export default HomeWhomWeHelpList;