import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const addUser = createAsyncThunk("users/addUser", async (user) => {
    const response = await axios.post("http://localhost:3000/users", user);
    return response.data;
  });

  export const showUser = createAsyncThunk("show",async() =>{
    const response = await axios.get("http://localhost:3000/users");    
    return response.data;
  })

  export const deleteUser = createAsyncThunk("delete",async(id)=>{
    const response = await axios.delete(`http://localhost:3000/users/${id}`)
    return id;
  })
  export const singleUser = createAsyncThunk("singleUser",async(id)=>{
    const response = await axios.get(`http://localhost:3000/users/${id}`)
    return response.data;
  })
  export const updateUser = createAsyncThunk("updateUser",async(id, user)=>{
    const response = await axios.put(`http://localhost:3000/users/${editUser.id}`, user)
    return response.data;
  })

export const crudslice = createSlice({
    name : "users",
    initialState : {
        editUser: {},
        users : [],
        loading : false
    },
    reducers :{
      empty: (state, action) => {
        state.editUser = {};
      }
    },
    extraReducers: (builder) => {
        builder
          .addCase(addUser.pending, (state) => {
            state.loading = true;
          })
          .addCase(addUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users.push(action.payload); 
          })
          .addCase(addUser.rejected, (state, action) => {
            state.loading = false;
           
          })
          .addCase(showUser.pending, (state) => {
            state.loading = true;
          })
          .addCase(showUser.fulfilled, (state, action) => {
            state.loading = false;            
            state.users = action.payload; // Set fetched users in Redux state
          })
          .addCase(showUser.rejected, (state, action) => {
            state.loading = false;
           
          })
          .addCase(deleteUser.pending, (state) => {
            state.loading = true;
          })
          .addCase(deleteUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users = state.users.filter((user) => user.id !== action.payload);
          })
          .addCase(deleteUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          })
          .addCase(singleUser.pending, (state) => {
            state.loading = true;
          })
          .addCase(singleUser.fulfilled, (state, action) => {
            state.loading = false;
            // console.log(action.payload);
            
            state.editUser = action.payload
          })
          .addCase(singleUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          })
          .addCase(updateUser.pending, (state) => {
            state.loading = true;
          })
          .addCase(updateUser.fulfilled, (state, action) => {
            state.loading = false;
            // state.users.push(action.payload); 
          })
          .addCase(updateUser.rejected, (state, action) => {
            state.loading = false;
           
          })
          
        }
        
})
export const { empty } = crudslice.actions
export default crudslice.reducer