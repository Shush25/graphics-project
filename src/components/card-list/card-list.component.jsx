import React from "react";
import { Card } from "../card/card.component";
import "./card-list.styles.scss";
export const CardList = (props) => (
  <div className="clist">
    <div
      className="card-list"
      data-aos="custom-slideIn"
      data-aos-duration="500"
    >
      {props.team.map((member) => (
        <Card key={member.id} member={member} />
      ))}
    </div>
  </div>
);
