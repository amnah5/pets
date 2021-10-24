import React from "react";
import petsData from "../petsData";
import PetItem from "./PetItem";
import { Col, Row, Container } from "react-bootstrap";

function PetsList({ query }) {
  let pett = petsData
    .filter((pet) => pet.name.toLowerCase().includes(query))
    .map((pet) => (
      <Col>
        <PetItem pet={pet} />
      </Col>
    ));
  return <>{pett}</>;
}

export default PetsList;
