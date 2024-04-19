import { createSlice } from "@reduxjs/toolkit";


export const UserSlice = createSlice({
    name:"users",
    initialState:{
        name:"",
        email:"",
        sex:"",
        password:""
    },
    reducers:{
        setName:(state, action)=>{
            state.name = action.payload
        },
        setEmail:(state, action)=>{
            state.email = action.payload
        },
        setSex:(state, action)=>{
            state.sex = action.payload
        },
        setPassword:(state, action)=>{
            state.password = action.payload
        },
    }
})

export const {setName, setEmail,setSex,setPassword} = UserSlice.actions;

export default UserSlice.reducer