import axios from "axios";
import { useState, useEffect } from "react";

const Databox = () => {
  const [post, setPosts] = useState([]);
  const apiEndPoint = "https://api.brest.bar/";
  useEffect(() => {
    const getPosts = async () => {
      const { data: res } = await axios.get(apiEndPoint);
      setPosts(res);
    };
    getPosts;
  }, []);
  return (
    <section className="w-3/4 h-full bg-red-500 rounded-xl">

    </section>
  )
};

export default Databox;
