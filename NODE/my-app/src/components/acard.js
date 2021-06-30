import React from "react";
import "../stylesheets/style.css";
import { Link } from "react-router-dom";
const Acard = (props) => {
  const { card } = props;

  return (
    <div className="section">
      <div className="card">
        <div class="container">
          <Link to={`/${card.id}`}>
            <h3> UserId:{card.userId}</h3>
            <p>Id:{card.id}</p>
            <p>Title:{card.title}</p>
            <p>Body:{card.body}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Acard;
