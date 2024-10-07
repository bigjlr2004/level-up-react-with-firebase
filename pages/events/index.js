import React, { useEffect, useState } from 'react';
import EventCard from '../../components/game/EventCard';
import { getEvents } from '../../utils/data/eventData';

function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents().then((data) => setEvents(data));
  }, []);

  return (
    <article className="games">
      <h1>Events</h1>
      {events.map((event) => (
        <section key={`game--${event.id}`} className="game">
          <EventCard description={event.description} date={event.date} time={event.time} game={event.game.title} />
        </section>
      ))}
    </article>
  );
}

export default Home;
