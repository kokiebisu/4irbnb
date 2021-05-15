import { isUser, isStay, isExperience } from '../src';

describe('isUser function:', () => {
  test('user with valid properties', () => {
    const user = {
      id: '123',
      username: 'johnp',
      name: 'John Parker',
      iconUrl: 'http://www.iconImg.com/image',
    };
    expect(isUser(user)).toEqual(true);
  });
  test('user with invalid id', () => {
    const user = {
      id: 123,
      username: 'johnp',
      name: 'John Parker',
      iconUrl: 'http://www.iconImg.com/image',
    };
    expect(isUser(user)).toEqual(false);
  });
  test('user with invalid username', () => {
    const user = {
      id: '123',
      username: false,
      name: 'John Parker',
      iconUrl: 'http://www.iconImg.com/image',
    };
    expect(isUser(user)).toBeFalsy();
  });
  test('user with invalid name', () => {
    const user = {
      id: '123',
      username: 'johnp',
      name: false,
      iconUrl: 'http://www.iconImg.com/image',
    };
    expect(isUser(user)).toBeFalsy();
  });
  test('user with invalid iconUrl', () => {
    const user = {
      id: 123,
      username: 'johnp',
      name: false,
      iconUrl: 32,
    };
    expect(isUser(user)).toBeFalsy();
  });
});

describe('isStay function', () => {
  test('stay with valid properties', () => {
    const stay = {
      id: 123,
    };
  });
});
