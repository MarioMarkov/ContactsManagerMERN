import React, {useContext,useRef} from 'react';
import ContactItem from '../contacts/ContactItem'
import ContactContext from '../../context/contact/contactContext'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

 const Contacts = () => {
    const contactContext = useContext(ContactContext);

    const {contacts,filtered} = contactContext;

    if(contacts.length ===0){
        return <h4>Please add a contact</h4>
    }

    return (
        <>
            <TransitionGroup>
                {filtered !==null?filtered.map(c=> 
                    <CSSTransition  key={c.id} timeout={500} classNames='item'>
                        <ContactItem  contact={c} />
                    </CSSTransition>) :
                contacts.map(c=>
                    <CSSTransition  key={c.id} timeout={500} classNames='item'>
                        <ContactItem  contact={c} />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </>
    )
}

export default Contacts;
