import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AdminMainPage from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminCreateElection from "./components/AdminCreateElection";
import AdminEditElection from "./components/AdminEditElection";
import AdminEditElectionByIdWrapper from "./components/AdminEditElectionById";
import Login from "./components/Login";
import FirstPage from './components/FirstPage'
import Register from './components/Register'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
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
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
