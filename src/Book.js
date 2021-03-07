import React from "react";
import { Card } from "ui-neumorphism";

function Book({ bookDetails }) {
  const background = bookDetails.image_url;
  const amazon_url = bookDetails.purchase_url;
  return (
    <Card
      dark
      rounded
      style={{
        cursor: "pointer",
      }}
    >
      <a href={amazon_url} target="_blank" rel="noreferrer">
        <img src={background} alt="" />
      </a>
    </Card>
  );
}

export default Book;
