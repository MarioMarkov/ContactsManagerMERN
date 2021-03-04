import React,{useState,useContext} from 'react'
import ContactContext from '../../context/contact/contactContext'

 const ContactForm = () => {

    const contactContext= useContext(ContactContext);

    const [contact,setContact]= useState({
        name:'',
        email:'',
        phone:'',
        type:'personal'
    });

    const {email,phone,type,name} = contact;

    //in every change of the input fields spreads the before it set properties
    //and sets the new one with tha value passed
    const onChange= e=>setContact({...contact, [e.target.name]:e.target.value})


    const onSubmit= e=>{
        e.preventDefault();

        contactContext.addContact(contact);
        setContact({
            name:'',
            email:'',
            phone:'',
            type:'personal'
        })
    }


    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-primary">
                Add Contact
            </h2>
            <input type="text" placeholder='Name' name='name' value={name} onChange={onChange}/>
            <input type="email" placeholder='Email' name='email' value={email} onChange={onChange}/>
            <input type="text" placeholder='Phone' name='phone' value={phone} onChange={onChange}/>
            <h5>Contact Type</h5>
            <input type="radio" name='type' value='personal' checked={type=='personal'}/>
            Pesonal{'  '}
            <input type="radio" name='type' value='professional' onChange={onChange} checked={type=='professional'}/>
            Professional{' '}

            <div>
                <input type="submit" value='Add Contact' onChange={onChange} className='btn btn-primary btn-block'/>
            </div>
        </form>
    )
}

export default  ContactForm