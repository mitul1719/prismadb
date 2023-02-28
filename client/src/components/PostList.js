import React, { useEffect, useState } from "react";
import { getPosts } from "../services/posts";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);
  return <div>{JSON.stringify(posts)}</div>;
};

export default PostList;
