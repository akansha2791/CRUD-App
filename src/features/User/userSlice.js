import { createSlice } from "@reduxjs/toolkit";
import {userList} from '../../data'

export const userSlice = createSlice({
    name: 'users',
    initialState : userList,
    reducers: {
        // Add user
        addUser: (state, action) => {
            state.push(action.payload)
        },
        //Update user
         updateUser: (state, action) => {
            console.log(action)
            const {id, name, email} = action.payload
            const currentUser = state.find((user) => user.id == id)
            currentUser.name = name
            currentUser.email = email
         },
        //Delete user
        deleteUser : (state, action) => {
            console.log(action)
            const  id = action.payload           
            return state.filter((user) => user.id !== id)
        }
    }
})
export const {deleteUser, addUser, updateUser} = userSlice.actions
export default userSlice.reducer