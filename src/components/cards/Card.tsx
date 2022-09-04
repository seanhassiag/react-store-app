import React from "react";
import { Badge } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

type CardComponentProps = {
  cardImg?: string;
  cardTitle?: string;
  cardInfo?: React.ReactNode;
  cardBadgeText?: string;
  onImageClickHandler?(): void;
  onClickHandler(e: React.MouseEvent<HTMLButtonElement>): void;
  handlerText?: string;
};

export const CardComponent: React.FC<CardComponentProps> = React.memo(
  ({
    cardImg,
    cardInfo,
    cardTitle,
    cardBadgeText,
    onClickHandler,
    handlerText,
    onImageClickHandler,
  }) => {
    return (
      <Card>
        <Card.Img
          variant="top"
          src={cardImg}
          style={{ width: "60%", height: "60%" }}
          onClick={onImageClickHandler}
        />
        <Card.Body>
          <Card.Title>
            <>
              {cardTitle}{" "}
              {cardBadgeText && (
                <Badge pill bg="dark">
                  {`$${cardBadgeText}`}
                </Badge>
              )}
            </>
          </Card.Title>
          <Card.Text>{cardInfo}</Card.Text>
          <Button variant="primary" onClick={onClickHandler}>
            {handlerText}
          </Button>
        </Card.Body>
      </Card>
    );
  },
);
