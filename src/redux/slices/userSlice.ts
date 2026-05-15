import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiInstance from '../../api/apiInstance';

interface UserItem {
  id: number;
  title: string;
  body: string;
}

interface UserState {
  data: UserItem[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',

  async (_, thunkAPI) => {
    try {
      const response = await apiInstance.get('/posts');

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Unable to fetch users');
    }
  },
);

const userSlice = createSlice({
  name: 'users',
  initialState,

  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })

      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default userSlice.reducer;