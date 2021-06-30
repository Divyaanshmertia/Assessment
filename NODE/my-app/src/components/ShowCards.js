import React, { useEffect, useState, Route } from "react";
import "../stylesheets/MovieCard.css";
import axios from "axios";
import Acard from "./acard";

const ShowCards = (props) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      await axios
        .get("http://localhost:7000/getdata")
        .then(({ data: foundData }) => {
          console.info(foundData);
          setCards(foundData);
        })
        .catch((error) => {
          console.error("Some error", error);
        });
    };
    fetchMovies();
  }, []);

  const renderCards = cards.map((card, index) => <Acard card={card} />);

  return (
    <div className={"section"}>
      <div>{renderCards}</div>
    </div>
  );
};
//dsadsa

export default ShowCards;
