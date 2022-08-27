import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Post from "./pages/post";
import Spinner from "./components/spinner";
import { useIsFetching, useIsMutating } from "@tanstack/react-query";

function App() {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="post" element={<Post />} />
      </Routes>

      {isFetching || isMutating ? <Spinner /> : null}
    </div>
  );
}

export default App;
