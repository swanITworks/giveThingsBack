import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import HomeWhomWeHelpList from "./HomeWhomWeHelpList";
import firebase from "../config.js"


const db = firebase.firestore();

const useFoundations = () => {
    const [foundations, setFoundations] = useState([]);

    useEffect(() => {
        db
            .collection('foundations')
            .onSnapshot((snapshot => {
                    const newFoundations = snapshot.docs.map((doc) => ({
                        id: doc.id, ...doc.data()
                    }));
                    setFoundations(newFoundations)
                }
            ))
    }, []);
    return foundations
};

const HomeWhomWeHelp = () => {
    const foundations = useFoundations();

    return (
        <div className='homeWhomWeHelp'>
            <div className='headerFourSteps'>
                <h2>Whom we help?</h2>
                <img src='../assets/Decoration.svg'/>
            </div>
            <div className='homeWhomHelpButtons'>
                <div className='homeWhomHelpButton'>
                    <NavLink exact to="/" activeClassName="active" className='button'>FOUNDATIONS</NavLink>
                </div>
                <div className='homeWhomHelpButton'>
                    <NavLink exact to="/" activeClassName="active" className='button'>NON-GOVERNMENTAL
                        ORGANIZATIONS</NavLink>
                </div>
                <div className='homeWhomHelpButton'>
                    <NavLink exact to="/" activeClassName="active" className='button'>LOCAL COLLECTION</NavLink>
                </div>
            </div>
            <div className='homeWhomHelpText'>
                <p>In our database you will find a list of verified foundations with which we cooperate. You can
                    check
                    what they do, who they help and what they need.</p>
            </div>
            <HomeWhomWeHelpList data={foundations}/>
        </div>
    )
}


export default HomeWhomWeHelp;