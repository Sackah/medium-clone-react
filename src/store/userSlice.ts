import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types/auth.types";

interface UserState {
    data: User | undefined;
    isLoggedIn: boolean;
}

const initialState: UserState = {
    data: undefined,
    isLoggedIn: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, payload) => {
            state.data = payload.payload;
            state.isLoggedIn = true;
            localStorage.setItem("reactAppToken", state.data!.token);
        },
        clearUser: (state) => {
            state.data = undefined;
            state.isLoggedIn = false;
            localStorage.removeItem("reactAppToken");
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
