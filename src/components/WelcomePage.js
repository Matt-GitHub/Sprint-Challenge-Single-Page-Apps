import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Header = styled.h1`
  color: aqua;
  text-align: center;
`;
const ImgBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;
const Img = styled.img`
  width: 102px;
  height: 102px;
  margin: 5px;
`;

export default function WelcomePage() {
  const [image, setImage] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then(response => {
        setImage(response.data.results);
        // console.log(response.data.results);
      })
      .catch(error => {
        console.log("error", error);
      });
  });
  return (
    <section className="welcome-page">
      <Header>
        <h1>Welcome to the ultimate fan site!</h1>
        <ImgBox>
          {image.map((img, index) => {
            return (
              <div key={index} className="main-img">
                <Img src={img.image} />
              </div>
            );
          })}
        </ImgBox>
      </Header>
    </section>
  );
}
