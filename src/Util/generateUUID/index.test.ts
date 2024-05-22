import { describe, expect, it } from 'vitest';
import generateUUID from '.';
describe('generateUUID', () => {
  it('should be defined', () => {
    expect(generateUUID).toBeDefined();
  });
});
