import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from '../types';
import setAuthToken from '../../utils/setAuthToken'

const AuthState = props => {
    const initialState ={
        token:localStorage.getItem('token'),
        isAuthenticated:null,
        loading:true,
        error:null,
        user:null
    };

    const [state,dispatch] = useReducer(authReducer,initialState);

    //load user
    const loadUser = async ()=>{
        if(localStorage.token){
            setAuthToken(localStorage.token)
        }

        try {
            const res = await axios.get('/api/auth');

            dispatch({type:USER_LOADED,payload:res.data})
        } catch (error) {
            dispatch({type:AUTH_ERROR})
        }
    }; 

    //register user
    const register = async formData =>{
        const config ={
            headers:{
                'Content-Type':'application/json'
            }
        }
        try {
            const res = await axios.post('/api/users',formData,config)

            dispatch({type:REGISTER_SUCCESS,payload:res.data})
        } catch (error) {
            dispatch({type:REGISTER_FAIL,payload:error.response.data.msg})
        }
        loadUser();
    }

    //login user
    const loginUser =()=>{
        console.log('sasas')
    }; 

    //logout 
    const logOut =()=>{
        console.log('sasas')
    }; 

    //clear errors
    const clearErrors =()=>{
        dispatch({type:CLEAR_ERRORS})
    }; 
    
    return (
        <AuthContext.Provider value={{
            token:state.token,
            isAuthenticated:state.isAuthenticated,
            loading:state.loading,
            user:state.user,
            error:state.error,
            register,
            loginUser,
            logOut,
            clearErrors,
            loadUser
        }}>
           {props.children} 
        </AuthContext.Provider>
    )
}

export default AuthState