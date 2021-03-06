import React,{useState,useContext,useEffect} from 'react'
import ContactContext from '../../context/contact/contactContext'

 const ContactForm = () => {

    const contactContext= useContext(ContactContext);

    const { addContact, current,clearCurrent,updateContact } = contactContext;

    useEffect(()=>{
        if(current!== null){
            setContact(current)
        }else{
            setContact({
                name:'',
                email:'',
                phone:'',
                type:'personal'
            })
        }
    },[contactContext,current])

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
        if(!current){
            addContact(contact);
            
        }
        else{
            updateContact(contact);
            
        }
        clearAll();
        setContact({
            name:'',
            email:'',
            phone:'',
            type:'personal'
        })
    }

    const clearAll = ()=>{
        clearCurrent();
    }

    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-primary" >
               {current?'Edit Contact':'Add Contact'}
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
                <input type="submit" value={current?'Update Contact':'Add Contact'} onChange={onChange} className='btn btn-primary btn-block'/>
            </div>
            {current&& <div>
                <button className="btn btn-light btn-block" onClick={clearAll}>Clear</button>
            </div> }
        </form>
    )
}

export default  ContactForm