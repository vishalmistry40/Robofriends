import React from 'react';

export default function Card({ name, email, id }) {
  return (
    <article className="robot-card">
      <img className="robot-avatar" src="/robot.svg" alt={`Illustration of ${name}`} loading="lazy" width="160" height="160" style={{ filter: `hue-rotate(${(id - 1) * 33}deg)` }} />
      <h2>{name}</h2>
      <p>{email}</p>
    </article>
  );
}
