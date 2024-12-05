import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate, useParams} from 'react-router-dom'
import {updateUser} from '../features/User/userSlice'

const Update = () => {
    const {id} = useParams()
    const users = useSelector((state) => state.users)
    const existingUser = users.find((user) => user.id == id)
    const [name, setName] = useState(existingUser ? existingUser.name : '')
    const [email, setEmail] = useState(existingUser ? existingUser.email : '')    
    const dispatch = useDispatch();
    const navigate = useNavigate()
   const handleUpdate = (e) => {
      e.preventDefault()
      dispatch(updateUser({id: id, name: name, email: email})) 
      navigate('/')     
   }
 
  return (
    <div className='d-flex w-100 vh-50 justify-content-center align-items-center mt-5'>
    <div className='w-50 border bg-secondary text-white p-5'>
        <h3>Update User</h3>
        <form onSubmit={handleUpdate}>
            <div>
                <label htmlFor='name'>Name:</label>
                <input
                    type='text'
                    name='name'                   
                    className='form-control'
                    placeholder='Enter name'
                    onChange={(e) => setName(e.target.value)}  
                    value={name}                 
                />
            </div>           
            <div className='my-3'>
                <label htmlFor='email'>Email:</label>
                <input
                    type='email'
                    name='email'                   
                    className='form-control'
                    placeholder='Enter email'
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email}                  
                />
            </div>           
            <button className='btn btn-info'>Update</button>
        </form>
    </div>
</div>
  )
}

export default Update