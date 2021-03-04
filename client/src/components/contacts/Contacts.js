import React, {useContext} from 'react';
import ContactItem from '../contacts/ContactItem'
import ContactContext from '../../context/contact/contactContext'

 const Contacts = () => {
    const contactContext = useContext(ContactContext);

    const {contacts} = contactContext;
    return (
        <>
            {contacts.map(c=>
                <ContactItem contact={c} key={c.id} />
            )}
        </>
    )
}

export default Contacts;
