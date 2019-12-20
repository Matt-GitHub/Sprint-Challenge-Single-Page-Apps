import React from "react";
import Header from "./components/Header.js";
import { Route, Link } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import styled from "styled-components";

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  text-decoration: none;
  padding: 10px;
  background-color: yellow;
  color: brown;
  font-size: 1.1rem;
  text-align: center;
  margin-right: 50px;
  margin-bottom: 10px;
`;

export default function App() {
  return (
    <main>
      <Header />
      <ButtonDiv>
        <Link to="/">
          <Button>Home</Button>
        </Link>

        <Link to="/characters">
          <Button>Characters</Button>
        </Link>
      </ButtonDiv>
      <Route exact path="/">
        <WelcomePage />
      </Route>
      <Route path="/characters">
        <CharacterList />
      </Route>
    </main>
  );
}
