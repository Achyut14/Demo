import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function FoodItem({ items, cantFind }) {
  const { id } = useParams();

  let snack = items.find(snack => snack.id === id);
  if (!snack) return <Redirect to={cantFind} />;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {snack.name}
          </CardTitle>
          <CardText className="font-italic">{snack.description}</CardText>
          {snack.recipe && (
          <p>
            <b>Recipe:</b> {snack.recipe}
          </p>
          )}
          {snack.serve && (
          <p>
            <b>Serve:</b> {snack.serve}
          </p>
          )}
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodItem;
