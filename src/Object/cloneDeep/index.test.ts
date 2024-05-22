import { describe, expect, it } from 'vitest';
import cloneDeep from '.';
describe('cloneDeep', () => {
  it('should be defined', () => {
    expect(cloneDeep).toBeDefined();
  });
});
