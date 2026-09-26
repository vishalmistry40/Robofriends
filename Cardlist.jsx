import React from 'react';
import Card from './Card.jsx';

export default function Cardlist({ robots }) {
  if (robots.length === 0) return <p className="empty-state" role="status">No robots found. Try another name or email.</p>;
  return (
    <section className="card-grid" aria-label="Robot friends">
      {robots.map((robot) => <Card key={robot.id} {...robot} />)}
    </section>
  );
}
