import React from "react";
import { Card, Placeholder } from "react-bootstrap";

function CardPlaceholder() {
  return (
    <Card className="text-center">
      <Card.Body>
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
          <Placeholder xs={6} /> <Placeholder xs={8} /> <Placeholder xs={6} />{" "}
        </Placeholder>
        <Placeholder.Button variant="danger" xs={6} className="mx-auto" />
      </Card.Body>
    </Card>
  );
}

export default CardPlaceholder;
