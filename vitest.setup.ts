import * as matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import { afterEach, expect } from 'vitest';

// Añade los matchers personalizados de jest-dom
expect.extend(matchers);

// Limpia el DOM después de cada test
afterEach(() => {
  cleanup();
});
