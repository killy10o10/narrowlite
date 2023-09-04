import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

// export const signIn = createAsyncThunk('auth/signIn', async (userData, { rejectWithValue }) => {
//   try {
//     const response = await axios.get('http://217.76.51.143/nlapi/login.php', userData);
//     return response.data;
//   } catch (error) {
//     return rejectWithValue(error.response.data);
//   }
// });

export const signIn = createAsyncThunk('auth/signIn', async (userData) => {
  const response = await fetch(
    `http://217.76.51.143/nlapi/login.php?Username=${userData.username}&Password=${userData.password}`,
    {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  const data = await response.json();
  return data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.user = null;
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
