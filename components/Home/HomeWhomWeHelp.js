import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import HomeWhomWeHelpList from "./HomeWhomWeHelpList";
import firebase from "../../config.js"

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

const useOrganizations = () => {
    const [organizations, setOrganizations] = useState([]);

    useEffect(() => {
        db
            .collection('organizations')
            .onSnapshot((snapshot => {
                    const newOrganizations = snapshot.docs.map((doc) => ({
                        id: doc.id, ...doc.data()
                    }));
                    setOrganizations(newOrganizations)
                }
            ))
    }, []);
    return organizations
};

const useLocals = () => {
    const [locals, setLocals] = useState([]);

    useEffect(() => {
        db
            .collection('locals')
            .onSnapshot((snapshot => {
                    const newLocals = snapshot.docs.map((doc) => ({
                        id: doc.id, ...doc.data()
                    }));
                    setLocals(newLocals)
                }
            ))
    }, []);
    return locals
};

const HomeWhomWeHelp = () => {

    const [whomHelp, setWhomHelp] = useState('foundations');

    const foundations = useFoundations();
    const organizations = useOrganizations();
    const locals = useLocals();

    return (
        <div name='whomWeHelp' className='homeWhomWeHelp'>
            <div className='headerFourSteps'>
                <h2>Whom we help?</h2>
                <img src='../../assets/Decoration.svg'/>
            </div>
            <div className='homeWhomHelpButtons'>
                <div className='homeWhomHelpButton'>
                    <button onClick={() => {
                        setWhomHelp('foundations')
                    }} className='button'>FOUNDATIONS
                    </button>
                </div>
                <div className='homeWhomHelpButton'>
                    <button onClick={() => {
                        setWhomHelp('organizations')
                    }} className='button'>NON-GOVERNMENTAL
                        ORGANIZATIONS
                    </button>
                </div>
                <div className='homeWhomHelpButton'>
                    <button onClick={() => {
                        setWhomHelp('locals')
                    }} className='button'>LOCAL
                        COLLECTION
                    </button>
                </div>
            </div>
            <div className='homeWhomHelpText'>
                <p>In our database you will find a list of verified foundations with which we cooperate. You can
                    check
                    what they do, who they help and what they need.</p>
            </div>
            <div className='homeWhomWeHelpList'>
                <ul>
                    {(whomHelp === 'foundations') ? <HomeWhomWeHelpList data={foundations}/> : null}
                    {(whomHelp === 'organizations') ? <HomeWhomWeHelpList data={organizations}/> : null}
                    {(whomHelp === 'locals') ? <HomeWhomWeHelpList data={locals}/> : null}
                </ul>
            </div>
        </div>
    )
}


export default HomeWhomWeHelp;