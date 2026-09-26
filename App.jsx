import React, { useMemo, useState } from 'react';
import Cardlist from './Cardlist.jsx';
import Searchbox from './Searchbox.jsx';
import { robots } from './robots.js';
import './App.css';

export default function App() {
  const [searchfield, setSearchfield] = useState('');
  const filteredRobots = useMemo(() => robots.filter(({ name, email }) =>
    `${name} ${email}`.toLowerCase().includes(searchfield.trim().toLowerCase())
  ), [searchfield]);

  return (
    <main className="app-shell">
      <header className="page-header">
        <div className="eyebrow">A small React demo</div>
        <h1>RoboFriends<span aria-hidden="true">.</span></h1>
        <p>A friendly directory of fictional robots. Search the cards and find your favorite.</p>
      </header>
      <div className="toolbar">
        <Searchbox searchfield={searchfield} searchChange={(event) => setSearchfield(event.target.value)} />
        <p className="result-count" role="status">{filteredRobots.length} of {robots.length} robots</p>
      </div>
      <Cardlist robots={filteredRobots} />
      <footer>Demo profiles use fictional names and example.com addresses. Robot illustrations are included locally.</footer>
    </main>
  );
}
