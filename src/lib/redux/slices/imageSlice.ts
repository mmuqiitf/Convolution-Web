import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	loading: false,
	value: 10,
	imageSrc: null,
} as any;

const imageSlice = createSlice({
	name: "image",
	initialState,
	reducers: {
		increment: (state) => {
			state.value++;
		},

		setImageSrc: (state, action) => {
			state.imageSrc = action.payload;
		},
	},
});

export const { increment, setImageSrc } = imageSlice.actions;

export default imageSlice.reducer;
