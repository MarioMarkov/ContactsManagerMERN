import React,{useContext} from 'react'
import ContactsContext from '../../context/contact/contactContext'


const ContactItem = ({contact}) => {
    const  contactContext = useContext(ContactsContext);
    const { deleteContact,setCurrent,cleaarCurrent} = contactContext;

    const {id,name,email,phone,type} = contact

    const onDelete = ()=>{
        deleteContact(id);
        cleaarCurrent();
    }

    return (
        <div className='card bg-ligth'>
            <h3 className='text-primary text-left'>
                {name}{' '} <span style={{float:'right'}} className={'badge '+(type=='professional'?'badge-success':'badge-primary')}>
                    {type.charAt(0).toUpperCase()+type.slice(1)}
                </span>
            </h3>
            <ul className='list'>
                {email&& ( 
                    <li>
                        <i className='fas fa-envelope-open'/> {email}
                    </li>
                )}
                {phone&& ( 
                    <li>
                        <i className='fas fa-phone'/> {phone} 
                    </li>
                )}
            </ul>
            <p>
                <button className="btn btn-dark btn-sm" onClick={() => setCurrent(contact)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>

            </p>
            
        </div>
    )
}

export default ContactItem
