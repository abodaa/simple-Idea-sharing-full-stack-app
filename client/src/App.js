import "./index.css";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
export default function App() {
  const [veiwIdeas, setVeiwIdeas] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/ideas").then((response) => {
      setVeiwIdeas(response.data);
    });
  }, []);
  console.log(veiwIdeas);
  return veiwIdeas.map((idea) => {
    return (
      <div>
        <h1>{idea.title}</h1>
        <p>{idea.subtitle}</p>
        <p>{idea.body}</p>
        <p>{idea.name}</p>
      </div>
    );
  });
}
