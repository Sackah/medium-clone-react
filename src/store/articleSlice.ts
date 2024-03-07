import { createSlice } from "@reduxjs/toolkit";
import { Article } from "../types/main.types";

const initialState: Record<"article", Article | undefined> = {
    article: undefined,
};

const articleSlice = createSlice({
    name: "article",
    initialState,
    reducers: {
        setArticle: (state, payload) => {
            state.article = payload.payload;
        },
        clearArticle: (state) => {
            state.article = undefined;
        },
    },
});

export const { setArticle, clearArticle } = articleSlice.actions;
export default articleSlice.reducer;
