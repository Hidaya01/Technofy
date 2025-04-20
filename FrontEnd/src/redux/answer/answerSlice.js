import { createSlice } from '@reduxjs/toolkit';

const answerSlice = createSlice({
  name: 'answer',
  initialState: {
    selectedAnswer: null,
  },
  reducers: {
    saveAnswer: (state, action) => {
      state.selectedAnswer = action.payload;
    },
  },
});

export const { saveAnswer } = answerSlice.actions;
export default answerSlice.reducer;
