import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Image } from "semantic-ui-react";
import styled from "styled-components";

// Styled
const CardBox = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  padding: 1px;
  max-width: 100%;
  width: 70%;
  margin: 10px auto;
`;
const CardContent = styled.p`
  display: flex;
  flex-direction: column;
  content-align: center;
  justify-content: center;
  margin-left: 20px;
`;
const Search = styled.input`
  display: flex;
  margin: 0 auto;
  border: 2px dashed purple;
  padding: 5px;
  width: 400px;
  text-align: center;
`;

const CardFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

export default function CharacterList() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then(response => {
        const characters = response.data.results.filter(
          character =>
            character.name.toLowerCase().includes(query.toLowerCase()) ||
            character.species.toLowerCase().includes(query.toLowerCase()) ||
            character.gender.toLowerCase().includes(query.toLowerCase()) ||
            character.status.toLowerCase().includes(query.toLowerCase())
        );
        setData(characters);
      })
      .catch(error => {
        console.log(error);
      });
    //  ! Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <section className="character-list">
      <form>
        <Search
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="Search for almost anything and you might find it"
          autoComplete="off"
        />
      </form>
      <CardFlex>
        {data.map((data, index) => {
          return (
            <CardBox key={index}>
              <img src={data.image} />
              <CardContent>
                <h2>{data.name}</h2>
                <h4>Last Known Status: {data.status}</h4>
                <p>Species: {data.species}</p>
                <p>Gender: {data.gender}</p>
                <p>Origin: {data.origin.name}</p>
                <p>Last Known Location: {data.location.name}</p>
              </CardContent>
            </CardBox>
          );
        })}
      </CardFlex>
    </section>
  );
}
