import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AdminMainPage from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminCreateElection from "./components/AdminCreateElection";
import AdminEditElection from "./components/AdminEditElection";
import Login from "./components/Login";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/admin/main" element={<AdminMainPage />} />
        <Route path="/admin/create" element={<AdminCreateElection />} />
        <Route path="/admin/edit" element={<AdminEditElection />} />
          <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
