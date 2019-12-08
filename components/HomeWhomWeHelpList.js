import React from "react";
import HomeWhomHelpListElement from "./HomeWhomHelpListElement";

function HomeWhomWeHelpList(props) {

    // function showList(items) {
    //     if (items.length <= 3) {
    //         return items.map(item => {
    //             return (
    //                 <HomeWhomHelpListElement key={item.id} name={item.name} description={item.description}
    //                                          place={item.place}/>)
    //         })
    //     } else {
    //         return (
    //             items.map((item, index) => {
    //                     if (index <= 2) {
    //                         return (
    //                             <HomeWhomHelpListElement key={item.id} name={item.name} description={item.description}
    //                                                      place={item.place}/>)
    //                     }
    //                 }
    //             )
    //         )
    //     }
    // }

    function showList2(items) {
        const sites = [];
        const quantityPerSite = 3;
        const quantityOfSites = Math.ceil(items.length / quantityPerSite);

        for (let i = 1; i <= quantityOfSites; i++) {
            if (i === 1) {
                sites.push(items.slice(i - 1, quantityPerSite * i));
            } else {
                sites.push(items.slice((i - 1) * quantityPerSite, quantityPerSite * i))
            }
        }
        console.log(sites);
      
    }

    return (
        <ul className='homeWhomWeHelpList'>
            {showList2(props.data)}
        </ul>
    )
}

export default HomeWhomWeHelpList;