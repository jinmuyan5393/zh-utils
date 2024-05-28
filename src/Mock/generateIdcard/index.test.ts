import { describe, expect, it } from 'vitest';
import generateIdcard from '.';
describe('generateIdcard', () => {
  it('should be defined', () => {
    expect(generateIdcard).toBeDefined();
  });
});
