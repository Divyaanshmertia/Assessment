import React, { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { Route, withRouter } from "react-router-dom";

const CustomPage = (props) => {
  const history = useHistory();
  const { postId } = useParams();
  console.log(postId);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      await Axios.get(`"/getdata/${postId}`)
        .then(({ data: foundComment }) => {
          console.info("foundComment");
          setCards(foundComment);
        })
        .catch((error) => {
          console.error("Some error", error);
        });
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <div>
        <h1 style={{ paddingTop: "39px" }}>{cards.comment}</h1>
      </div>
    </div>
  );
};
export default withRouter(CustomPage);
