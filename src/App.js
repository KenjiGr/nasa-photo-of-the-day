import React, {useState, useEffect} from "react";
import Title from "./Components/Title";
import Photo from "./Components/Photo";
import Info from "./Components/Info.js";
import Date from "./Components/Date";
import axios from "axios";
import styled from "styled-components";

import "./App.css";

const Background = styled.section`
background-image: url("https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1370&q=80");
background-color: black;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`;

const Header = styled.p`
  color: white;
  background: black;
  padding: 2%;
  `

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(); 
  }, []);

  const fetch = () => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=5uUFRepIgT5uajZOOzAyHUnrlrYkEThZANAr3DKK`)
    .then(res => {
        setData(res.data);
        console.log(res.data, "response data")
    })
    .catch(error => {
        console.log(`error ${error}`);
    })
  }
  console.log(data);

  return (
    <div className="App">
      <Background>
        <Header>NASA Photo of the Day</Header>
        <Title title={data.title}/>
        <Photo src={data.url}/>
        <Info info={data.explanation}/>
        <Date date={data.date}/>
      </Background>
    </div>
  );
}