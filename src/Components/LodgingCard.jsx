import React from "react";
import { Link } from "react-router-dom";

import '../Styles/sass/composants/_lodgingCard.scss';


const LodgingCard = (props) => {
  return (
    <div className="lodgingCard">
      <Link to={"/apartments/?id=" + props.id} className="lodgingCard__link">
        <img
          src={props.pictures[0]}
          alt={props.title}
          className="lodgingCard__link__image"
        ></img>
        <div className="lodgingCard__link__background"></div>
        <p className="lodgingCard__title">{props.title}</p>
      </Link>
    </div>
  );
};

export default LodgingCard;
