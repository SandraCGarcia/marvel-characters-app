
import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { BodyContent } from "./components/BodyContent/BodyContent";

export const App = () => {
  const [dataCharacter, updateDataCharacter] = useState([]);

  const getInitialCharacter = () => {
    fetch(
      "https://gateway.marvel.com:443/v1/public/characters?apikey=d8e45fec572e0cab12e46328c1ae4a46&hash=7bcf629272279606dc151404a222c4b0&ts=1&limit=50"
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        const characters = data.data.results.map((character, index) => {
          return { id: index, ...character };
        });
        updateDataCharacter(characters);
      });
  }

  useEffect(() => getInitialCharacter(), []);

  return (
    <>
      <Header />
      <BodyContent
        dataCharacter={dataCharacter}
      />
    </>
  );
};

export default App;

