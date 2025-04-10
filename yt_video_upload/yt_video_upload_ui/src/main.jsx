import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import Login from "./pages/Login.jsx";
import Upload from "./pages/Upload.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="" element={<Navigate to={"/login"} />} />
        <Route path="upload" element={<Upload />} />
        <Route path="list" element={<h1>This is list of uploads Page</h1>} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<App />} />
    </Routes>
  </BrowserRouter>
);
