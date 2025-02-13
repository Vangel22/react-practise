import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) =>
        console.log("Printing while pending", state)
      )
      .addCase(incrementAsync.fulfilled, (state, action) => {
        console.log(state.value, action.payload);
        state.value += action.payload;
      })
      .addCase(incrementAsync.rejected, (state, action) => {
        console.error("Error: ", action.error.message);
      });
  },
});

export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount) => {
    await new Promise((res) => setTimeout(res, 3000));
    return amount;
  }
);

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
