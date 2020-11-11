import React from "react";
import "../styles/partials/_collapse.scss";

const Collapse = props => {
  return (
    <div className={`collapse ${props.id}`} id={props.id}>
      <h3 className={`collapse__title ${props.id}--title`}>
        {props.title}
        <img className="arrow" src="/media/img/icons/icon--arrow.svg" width="32" height="32" alt="" role="presentation" />
      </h3>
      <div className={`collapse__content ${props.id}--content`}>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default Collapse;
