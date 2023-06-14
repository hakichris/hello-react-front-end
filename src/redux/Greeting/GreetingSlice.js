import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:3000/api/v1/greetings';
const initialState = {
  greetingstore: [],
  status: 'idle',
};

export const fetchGreetings = createAsyncThunk('greetings/fetchGreetings', async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
});

export const GreetigSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder.addCase(fetchGreetings.fulfilled, (state, action) => {
      state.greetingstore = state.greetingstore.concat(action.payload);
    });
    builder.addCase(fetchGreetings.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export default GreetigSlice.reducer;
