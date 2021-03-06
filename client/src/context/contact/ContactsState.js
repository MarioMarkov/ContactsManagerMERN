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
        ],
        current:null,
        filtered:null
    };
    const [state,dispatch] = useReducer(contactReducer,initialState);

    //add contact
    const  addContact =contact=>{
        contact.id = uuidv4();

        dispatch({type:ADD_CONTACT ,payload:contact})

    }

    //delete contact
    const deleteContact = id=>{
        dispatch({type:DELETE_CONTACT ,payload:id})
    }

    //set current contact
    const setCurrent = contact=>{
        dispatch({type:SET_CURRENT ,payload:contact})
    }


    //clear curr contact
    const clearCurrent = ()=>{
        dispatch({type:CLEAR_CURRENT})
    }

    //update contact
    const updateContact =contact=>{
        dispatch({type:UPDATE_CONTACT,payload:contact})
    }


    //delete curr contact

    //filter contacts
    const filterContacts =text=>{
        dispatch({type:FILTER_CONTACTS,payload:text})
    }


    //clear filter
    const clearFilter = ()=>{
        dispatch({type:CLEAR_FILTER})
    }


    return (
        <ContactContext.Provider value={{
            contacts: state.contacts,
            current :state.current,
            filtered :state.filtered,
            filterContacts,
            clearFilter,
            setCurrent,
            clearCurrent,
            addContact,
            deleteContact,
            updateContact
        }}>
            { props.children }
        </ContactContext.Provider>
    )
       
}

export default ContactsState

