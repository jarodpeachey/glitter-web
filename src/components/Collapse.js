import React from "react";
import "../styles/partials/_collapse.scss";

const Collapse = props => {
  return (
    <div className={`collapse ${props.id} ${props.outlined ? "outlined" : null}`} id={props.id}>
      <h4 className={`collapse__title ${props.id}--title`}>
        {props.title}
        <img className="arrow" src="/media/img/icons/icon--arrow-right.svg" width="24" height="24" alt="" role="presentation" />
      </h4>
      <div className={`collapse__content ${props.id}--content`}>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default Collapse;
