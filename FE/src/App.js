import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
// import Store from "./pages/store/Store";
// import Community from "./pages/community/Community";

function App() {
  return (
    <Routes>


      <Route path="/" element={<Main/>}/>
      {/* <Route path="/store" element={<Store/>}> */}
     {/* <Route path="/store/:word" element={<Store/>}> */}
      {/* <Route path="/community" element={<Articles />} /> */}

    </Routes>
  );
}

export default App;
