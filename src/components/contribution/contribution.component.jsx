import React from "react";
import "./contribution.styles.scss";
export const Contribution = (props) => {
  var checkside = null;
  if (props.styledDescription.id % 2 === 0) {
    checkside = 1;
  }
  return (
    <div>
      {checkside ? (
        <div className="blocks">
          <img
            src={props.styledDescription.imageUrl}
            alt="why"
            data-aos="slide-right"
            data-aos-duration="500"
          />
          <div className="para" data-aos="slide-left" data-aos-duration="500">
            <h1>{props.styledDescription.title}</h1>
            <p>{props.styledDescription.description}</p>
          </div>
        </div>
      ) : (
        <div className="blocks">
          <div className="para" data-aos="slide-right" data-aos-duration="500">
            <h1>{props.styledDescription.title}</h1>
            <p>{props.styledDescription.description}</p>
          </div>
          <img
            src={props.styledDescription.imageUrl}
            alt="why"
            data-aos="slide-left"
            data-aos-duration="500"
          />
        </div>
      )}
    </div>
  );
};
