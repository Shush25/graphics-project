import React from "react";
import "./contribution-list.styles.scss";
export const ContributionList = (props) => {
  return (
    <div>
      {props.contribution.title ? (
        <div
          className="contri-title"
          data-aos="slide-left"
          data-aos-duration="500"
        >
          {props.contribution.title}
        </div>
      ) : (
        <div></div>
      )}
      {props.contribution.description ? (
        <div
          className="contri-para"
          data-aos="slide-left"
          data-aos-duration="500"
        >
          {props.contribution.description}
        </div>
      ) : (
        <div></div>
      )}
      {props.contribution.imageUrl ? (
        <div className="contri-image">
          <img
            src={props.contribution.imageUrl}
            alt="why"
            data-aos="slide-right"
            data-aos-duration="500"
            className="contri-image"
          />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
