import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import PostList from "./components/PostList";
import { getPosts } from "./services/posts";

function App() {
  return (
    <div>
      <PostList />
    </div>
  );
}

export default App;
