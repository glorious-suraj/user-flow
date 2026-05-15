import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserData {
  fullName: string;
  email: string;
  password: string;
}

interface AuthState {
  user: UserData | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    registerUser: (state, action: PayloadAction<UserData>) => {
      state.user = action.payload;
    },

    loginUser: (state, action: PayloadAction<UserData>) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },

    logoutUser: state => {
      state.isLoggedIn = false;
    },
  },
});

export const { registerUser, loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
