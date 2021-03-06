import React, {useContext} from 'react';
import ContactItem from '../contacts/ContactItem'
import ContactContext from '../../context/contact/contactContext'

 const Contacts = () => {
    const contactContext = useContext(ContactContext);

    const {contacts,filtered} = contactContext;

    if(contacts.length ===0){
        return <h4>Please add a contact</h4>
    }

    return (
        <>
            {filtered !==null?filtered.map(c=> <ContactItem contact={c} key={c.id} /> ) :
                contacts.map(c=>
                <ContactItem contact={c} key={c.id} />
            )}
        </>
    )
}

export default Contacts;
