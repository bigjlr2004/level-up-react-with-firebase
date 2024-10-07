import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'react-bootstrap';

const EventCard = ({
  description, //
  date,
  time,
  game,
}) => (
  <Card className="text-center">
    <Card.Header>Event Date: {date}</Card.Header>
    <Card.Body>
      <Card.Title>Event: {description}</Card.Title>
      <Card.Text>Event Time:{time}</Card.Text>
    </Card.Body>
    <Card.Footer className="text-muted">Event Game: {game}</Card.Footer>
  </Card>
);

EventCard.propTypes = {
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  game: PropTypes.string.isRequired,
};

export default EventCard;