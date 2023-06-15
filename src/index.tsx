import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AdminMainPage from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import AdminCreateElection from "./components/AdminCreateElection";
import AdminEditElection from "./components/AdminEditElection";
import AdminEditElectionByIdWrapper from "./components/AdminEditElectionById";
import Login from "./components/Login";
import FirstPage from './components/FirstPage'
import Register from './components/Register'
import UserMainPage from "./components/UserMainPage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/admin/main" element={<AdminMainPage />} />
          <Route path="/admin/create" element={<AdminCreateElection />} />
          <Route path="/admin/edit" element={<AdminEditElection />} />
          <Route
            path="/admin/edit/:id"
            element={<AdminEditElectionByIdWrapper />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<FirstPage />} />
          <Route path="/user" element={<UserMainPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
