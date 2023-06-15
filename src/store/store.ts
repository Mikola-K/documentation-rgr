
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
  isAdmin: false,
  idPerson: 0
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setIsAdmin: (state, action) => {
      state.isAdmin = action.payload;
    },
    setIdPerson: (state, action) => {
      state.idPerson = action.payload;
    },
  },
});

export const { setAccessToken } = authSlice.actions;
export const { setIsAdmin } = authSlice.actions;
export const { setIdPerson } = authSlice.actions;

const store = configureStore({
  reducer: authSlice.reducer,
});

export default store;




// import { createStore } from "redux";

// // Action types
// const SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN";

// // Action creators
// export const setAccessToken = (accessToken: any) => ({
//   type: SET_ACCESS_TOKEN,
//   payload: accessToken,
// });

// // Reducer
// const initialState = {};
// const accessTokenReducer = (state = initialState, action: any) => {
//   switch (action.type) {
//     case SET_ACCESS_TOKEN:
//       return action.payload;
//     default:
//       return state;
//   }
// };

// const store = createStore(accessTokenReducer);

// export default store;