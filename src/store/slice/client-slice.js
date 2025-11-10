import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const sendEmail = createAsyncThunk(
  "client/sendEmail",
  async (params = {}, thunkAPI) => {
    try {
      const response = await axios.post("/api/client", params);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message || "Network error"
      );
    }
  }
);

const clientSlice = createSlice({
  name: "client",
  initialState: {
    loading: false,
    error: null,
    success: false,
    message: null,
  },
  reducers: {
    resetClientState(state) {
      state.loading = false;
      state.error = null;
      state.success = false;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendEmail.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
        state.message = null;
      })
      .addCase(sendEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload?.message || "Email sent successfully";
      })
      .addCase(sendEmail.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload || action.error?.message;
      });
  },
});

export const { resetClientState } = clientSlice.actions;
export default clientSlice.reducer;
