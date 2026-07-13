import React, { useEffect, useState } from "react";
import axios from "axios";

function Delete() {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  function deleteData(id) {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(() => {
        alert("Post Deleted");

        setPosts(posts.filter((post) => post.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>

      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>

          <button onClick={() => deleteData(post.id)}>
            Delete
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Delete;