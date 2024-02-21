import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types/auth.types";
import { LocalStorageService } from "../utils/localStorage.service";

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
            LocalStorageService.setAccessToken(state.data!.token);
        },
        clearUser: (state) => {
            state.data = undefined;
            state.isLoggedIn = false;
            LocalStorageService.removeAccessToken();
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
