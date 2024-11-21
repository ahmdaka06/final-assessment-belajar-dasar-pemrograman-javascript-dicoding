import { test } from 'node:test'; 
import assert from 'node:assert'; 
import { sum } from './index.js';

test('sum of two numbers', () => {
  assert.strictEqual(sum(2, 3), 5, 'Expected 2 + 3 to be 5');
  assert.strictEqual(sum(-1, 1), 0, 'Expected -1 + 1 to be 0');
  assert.strictEqual(sum(0, 0), 0, 'Expected 0 + 0 to be 0');
  assert.strictEqual(sum(-2, -3), -5, 'Expected -2 + -3 to be -5');
});
