
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
});

export const { setAccessToken } = authSlice.actions;

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