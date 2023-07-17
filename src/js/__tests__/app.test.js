import Validator from '../app';

test('usernameOk', () => {
  const username = 'Asd_123aSd45-a';
  const nickname = new Validator(username);
  const result = nickname.validateUsername();
  expect(result).toBe(true);
});

test('usernameOneLetter', () => {
  const username = 'A';
  const nickname = new Validator(username);
  const result = nickname.validateUsername();
  expect(result).toBe(true);
});

test('illegalSymbol', () => {
  const username = 'Asd_123aSd45-Ы-a';
  const nickname = new Validator(username);
  const result = nickname.validateUsername();
  expect(result).toBe(false);
});

test('more3digits', () => {
  const username = 'Asd_123aSd4567-a';
  const nickname = new Validator(username);
  const result = nickname.validateUsername();
  expect(result).toBe(false);
});

test('illegalStart', () => {
  const username = '2Asd_123aSd45-a';
  const nickname = new Validator(username);
  const result = nickname.validateUsername();
  expect(result).toBe(false);
});

test('illegalFinish', () => {
  const username = 'Asd_123aSd45-a-';
  const nickname = new Validator(username);
  const result = nickname.validateUsername();
  expect(result).toBe(false);
});
