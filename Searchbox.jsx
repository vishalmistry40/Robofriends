import React from 'react';

export default function Searchbox({ searchfield, searchChange }) {
  return (
    <label className="search-field">
      <span>Find a robot friend</span>
      <input type="search" placeholder="Search by name or email" value={searchfield} onChange={searchChange} autoComplete="off" />
    </label>
  );
}
