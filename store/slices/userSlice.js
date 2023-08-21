import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'counter',
  initialState: {
    useId : "",
    userName: "",
    userEmail: "",
    typeOfUser: "",
    skills: [],
    description: "",
  },
  reducers: {
    userLogIn: (state, action) => {
      state.userEmail = action.payload;
    },
    userLogOut: (state) => {
      state.userId = "";
      state.userName = "";
      state.userEmail = "";
      state.typeOfUser = "";
      state.skills = [];
      state.description = "";
    },
    loadUserData: (state, action) => {
      console.log("Something")
      state.userId = action.payload._id;
      state.userName = action.payload.username;
      state.userEmail = action.payload.email;
      state.typeOfUser = action.payload.typeOfUser;
      //state.skills = action.payload.skills;
      state.description = action.payload.description;
    },
  },
})

// Action creators are generated for each case reducer function
export const { userLogIn, userLogOut, loadUserData } = userSlice.actions

export default userSlice.reducer