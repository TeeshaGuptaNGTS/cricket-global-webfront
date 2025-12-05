import { createSlice } from "@reduxjs/toolkit";
import {
  getTokenLocal,
  getUserLocal,
  setTokenLocal,
  setUserLocal,
} from "../../utils/localStorage.util";

const initialState = {
  userInfo: getUserLocal(),
  token: getTokenLocal(),
  usersList: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      setUserLocal(action.payload);
      state.userInfo = action.payload;
    },

    updateToken: (state, action) => {
      setTokenLocal(action.payload);
      state.token = action.payload;
    },

    updateAllUser: (state, action) => {
      state.usersList = action.payload;
    },

    // ⭐ NEW — Update membership status
    updateMembershipStatus: (state, action) => {
      const updatedUser = {
        ...state.userInfo,
        showMembership: action.payload, // true or false
      };

      setUserLocal(updatedUser);
      state.userInfo = updatedUser;
    },

    logout: (state) => {
      setUserLocal(null);
      setTokenLocal(null);
      state.userInfo = null;
      state.token = null;
    },
  },
});

export const {
  updateUser,
  updateToken,
  updateAllUser,
  updateMembershipStatus,
  logout,
} = userSlice.actions;

export default userSlice.reducer;
