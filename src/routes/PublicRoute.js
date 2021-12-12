import React, {useContext} from 'react';

import {Navigate } from 'react-router-dom'
import {AuthContext} from '../Components/auth/authContext'


export const PublicRoute = ({children}) =>{

    const {userState} = useContext(AuthContext);

    return userState.logged
    ? <Navigate to='/dc'/>
    : children


}