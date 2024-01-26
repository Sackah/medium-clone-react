import {createSlice} from "@reduxjs/toolkit";
import {User} from "../types/auth.types";

const initialState: {user: User| null} = {
    user: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, payload    )=>{
            state.user = payload.payload
        },
        clearUser: (state)=>{
            state.user = null;
        }
    }
})

export const {setUser, clearUser} = userSlice.actions;
export default  userSlice.reducer;