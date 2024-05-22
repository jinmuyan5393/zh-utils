import { describe, expect, it } from 'vitest';
import debounce from '.';
describe('debounce', () => {
  it('should be defined', () => {
    expect(debounce).toBeDefined();
  });
});
