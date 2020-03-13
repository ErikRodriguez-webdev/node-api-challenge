import React, { useState, useEffect } from "react";
import axios from "axios";
import CardDisplay from "./components/CardDisplay";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Projects</h1>
      <div className="cardContainer">
        {data.map((each) => {
          return <CardDisplay key={each.id} data={each} />;
        })}
      </div>
    </div>
  );
};

export default App;
