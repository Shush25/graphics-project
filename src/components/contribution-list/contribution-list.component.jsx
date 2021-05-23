import React from "react";
import "./contribution-list.styles.scss";
export const ContributionList = (props) => {
  var checkside = null;
  if (props.contribution.id % 2 === 0) {
    checkside = 1;
  }
  return (
    <div>
      {checkside ? (
        <div className="blocks">
          <img
            src={props.contribution.imageUrl}
            alt="why"
            data-aos="slide-right"
            data-aos-duration="500"
          />
          <div className="para" data-aos="slide-left" data-aos-duration="500">
            <h1>{props.contribution.title}</h1>
            <p>{props.contribution.description}</p>
          </div>
        </div>
      ) : (
        <div className="blocks">
          <div className="para" data-aos="slide-right" data-aos-duration="500">
            <h1>{props.contribution.title}</h1>
            <p>{props.contribution.description}</p>
          </div>
          <img
            src={props.contribution.imageUrl}
            alt="why"
            data-aos="slide-left"
            data-aos-duration="500"
          />
        </div>
      )}
    </div>
  );
};
