import {formatUtcDate} from "./utils.js";

describe('utils functions', () => {

  test('return correct date format', () => {
    const formatedDate = formatUtcDate('2006-03-24T22:30:00.000Z');
    expect(formatedDate).toBe('24-03-2006');
  });

  test('return empty string if the date is undefined', () => {
    const formatedDate = formatUtcDate();
    expect(formatedDate).toBe('');
  });

});