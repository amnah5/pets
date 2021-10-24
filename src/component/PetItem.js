import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

function PetItem({ pet }) {
  const [image, setImage] = useState(pet.image);
  return (
    <div className="list">
      <img src={image} alt={pet.title} width={"150px"} height={"150px"} />
      <h2> {pet.name}</h2>
      <Button
        className="button"
        variant="outline-success"
        onClick={() => {
          if (image === pet.image) setImage(pet.image2);
          else setImage(pet.image);
        }}
      >
        GIF
      </Button>
    </div>
  );
}

export default PetItem;
