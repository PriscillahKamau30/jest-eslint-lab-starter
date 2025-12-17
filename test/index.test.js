const { capitalizeWords, filterActiveUsers, logAction } = require('../index')

describe('capitalizeWords', () => {
  test('capitalizes each word in a string', () => {
    expect(capitalizeWords('hello world')).toBe('Hello World');
  });

  test('returns empty string for empty input', () => {
    expect(capitalizeWords('')).toBe('');
  });

  test('handles single word', () => {
    expect(capitalizeWords('hello')).toBe('Hello');
  });

  test('handles strings with special characters', () => {
    expect(capitalizeWords('hello-world')).toBe('Hello-World');
  });
});

describe('filterActiveUsers', () => {
  test('returns only active users', () => {
    const users = [
      { name: 'Alice', isActive: true },
      { name: 'Bob', isActive: false }
    ];
    expect(filterActiveUsers(users)).toEqual([
      { name: 'Alice', isActive: true }
    ]);
  });

  test('returns empty if no active users', () => {
    const users = [
      { name: 'Bob', isActive: false }
    ];
    expect(filterActiveUsers(users)).toEqual([]);
  });

  test('returns empty array when given empty array', () => {
    expect(filterActiveUsers([])).toEqual([]);
  });
});

describe('logAction', () => {
  test('logs correct action and username', () => {
    const result = logAction('login', 'Alice');
    expect(result).toContain('User Alice performed login at');
  });

  test('handles missing action', () => {
    expect(logAction('', 'Alice')).toContain('User Alice performed');
  });

  test('handles missing username', () => {
    expect(logAction('logout', '')).toContain('performed logout');
  });
});

