// @vitest-environment jsdom
import React from 'react';
import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App.jsx';

describe('robot directory', () => {
  it('filters fictional friends by name or email and handles no results', () => {
    render(<App />);
    expect(screen.getByText('10 of 10 robots')).toBeTruthy();
    const input = screen.getByRole('searchbox');
    fireEvent.change(input, { target: { value: 'NOVA' } });
    expect(screen.getByText('Nova Circuit')).toBeTruthy();
    expect(screen.queryByText('Atlas Spark')).toBeNull();
    fireEvent.change(input, { target: { value: 'atlas@example.com' } });
    expect(screen.getByText('Atlas Spark')).toBeTruthy();
    fireEvent.change(input, { target: { value: 'no match' } });
    expect(screen.getByText(/No robots found/)).toBeTruthy();
    expect(screen.getByText('0 of 10 robots')).toBeTruthy();
  });
});
