import React from "react";
import { Card } from "ui-neumorphism";

function Book({ bookDetails }) {
  const background = bookDetails.src;
  return (
    <Card
      dark
      rounded
      style={{
        cursor: "pointer",
      }}
    >
      <a href="http://www.amazon.com" target="_blank" rel="noreferrer">
        <img src={background} alt="" />
      </a>
    </Card>
  );
}

export default Book;
