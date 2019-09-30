import React,{useEffect,useState} from 'react'
import {axiosWithAuth} from '../../util/axiosWithAuth'

const UsersList =() =>{
    let [users,setUsers]=useState();
    useEffect(() =>{
        axiosWithAuth()
        .get('/users/users')
        .then(res =>setUsers(res.data))
        .catch(err =>console.log(err))
    },[])

    console.log('USERS',users)
    return(
        <div>
           {users && users.map(user =>{
               return(
                   <p key={user.userid}>{user.username}</p>
               )
           })}
        </div>
    )
}
export default UsersList;