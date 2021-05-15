import { subDays } from 'date-fns';
import { generateTimestamp } from '../src';

describe('generateTimestamp function', () => {
  test('3 days ago', () => {
    expect(generateTimestamp(subDays(new Date(), 3))).toEqual('3 days ago');
  });
});
