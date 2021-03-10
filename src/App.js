import React, { useEffect } from "react";
import { Button, Grid } from "@material-ui/core";
import { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import MyCard from "./components/MyCard";
import { getmatches } from "./api/Api";
function App() {

  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getmatches()
      .then((data) => {
        setMatches(data.matches);
        console.log(data.matches);
      })
      .catch((error) => alert("couldnt proceed"));


  }, []);



  return (
    <div className="App">
      <Navbar />
      <h1>Welcome to live match score</h1>
      <Grid container>
        <Grid sm="2"></Grid>
        <Grid sm="8">

          {
            matches.map((match) => (
              <MyCard match={match} />

            ))
          }
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
