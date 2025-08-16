import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import App from './App';
beforeEach(() => {
  render(<App />);
});
describe('<App />', () => {
  it('Si existe world', () => {
    const title = document.querySelector('h1') ?? undefined;
    expect(title).toBeDefined();
  });
  it('Si existe Hello World', () => {
    const title = document.querySelector('h1') ?? undefined;
    expect(title).toHaveTextContent(/hello world/i);
  });
});
