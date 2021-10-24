import "./App.css";
import { useState } from "react";
import PetsList from "./component/PetsList";
import SearchBar from "./component/SearchBar";

import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [query, setQuery] = useState("");
  return (
    <div className="A">
      <div className="b">
        <SearchBar setQuery={setQuery} />
        <Container>
          <Row md={3}>
            <PetsList query={query} />
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
