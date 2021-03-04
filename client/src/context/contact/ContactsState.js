import React , {useReducer} from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import {ADD_CONTACT,DELETE_CONTACT,SET_CURRENT,CLEAR_CURRENT,
    UPDATE_CONTACT,FILTER_CONTACTS,CLEAR_FILTER} from '../types'

const ContactsState = props =>{
    const initialState = {
        contacts :[
            {
                id:1,
                name:'Mario Markov',
                email:'mariomark@gas.bg',
                phone:'0894372662',
                type:'professional'
            },
            {
                id:2,
                name:'John Doe',
                email:'jdoe@gas.bg',
                phone:'0894373662',
                type:'personal'
            }
        ]
    };
    const [state,dispatch] = useReducer(contactReducer,initialState);

    //add contact
    const  addContact =contact=>{
        contact.id = uuidv4();

        dispatch({type:ADD_CONTACT ,payload:contact})

    }

    //delete contact

    //sett current contact

    //clear curr contact

    //delete curr contact

    //filter contacts

    //clear filter

    return (
        <ContactContext.Provider value={{
            contacts: state.contacts,
            addContact
        }}>
            { props.children }
        </ContactContext.Provider>
    )
       
}

export default ContactsState

