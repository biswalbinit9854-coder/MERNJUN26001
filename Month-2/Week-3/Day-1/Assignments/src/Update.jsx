import React, { useEffect, useState } from "react";
import axios from "axios";

function Update() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");


  async function getData() {
    try {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      setPosts(result.data);
    } catch (error) {
      console.log(error);
    }
  }
  async function updateData() {
    try {
      const response = await axios.put(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
          title: title,
          body: "Updated Body",
          userId: 1,
        }
      );

      console.log(response.data);
      alert("Post Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>

      <input
        type="text"
        placeholder="Enter New Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={updateData}>Update</button>

      <hr />

      <ol>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </div>
  );
}

export default Update;