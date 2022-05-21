import ArrayBufferConverter from '../arrayBufferConverter';
import getBuffer from '../getBuffer';

test('should return string definition from arraybuffer', () => {
  const converter = new ArrayBufferConverter();
  const result = converter.toString(getBuffer());
  // в качестве параметра передаю результат работы функции getBuffer()
  expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
