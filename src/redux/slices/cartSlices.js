import {createSlice} from '@reduxjs/toolkit'


const slice = createSlice({
    name:"Cart",
    initialState:[],
    reducers:{
     addItem:(state,action)=>{
        // console.log("addS", state)
        //    state.push(action.payload)
        return [...state,action.payload]
     },
     filter:(state,action)=>{
        //  console.log(action.payload.index)
        // state.splice(action.payload.index,1)
     }
    }
})


export const {addItem , filter} = slice.actions

export default slice.reducer