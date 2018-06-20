import tensorflowjs from '.';

test('output', () => {
  expect(tensorflowjs('🐰')).toBe('🐰');
  expect(tensorflowjs()).toBe('No args passed!');
});
