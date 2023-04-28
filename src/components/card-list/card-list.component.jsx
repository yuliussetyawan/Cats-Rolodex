import React, { Component } from "react";
import "./card-list.style.css";
import Card from "../card/card.component";

const CardList = ({ cats }) => {
  return (
    <div className="card-list">
      {cats.map((cat) => {
        return <Card key={cat.id} cat={cat} />;
      })} 
    </div>
  );
};

export default CardList;
