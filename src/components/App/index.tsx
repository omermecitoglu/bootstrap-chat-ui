import { faHandPeace } from "@fortawesome/free-solid-svg-icons/faHandPeace";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Container from "react-bootstrap/Container";

const App = () => {
  return (
    <Container>
      Bootstrap with Font Awesome <FontAwesomeIcon icon={faHandPeace} />
    </Container>
  );
};

export default App;
