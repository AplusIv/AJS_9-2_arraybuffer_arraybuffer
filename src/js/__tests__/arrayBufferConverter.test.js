import ArrayBufferConverter from '../arrayBufferConverter';
import getBuffer from '../getBuffer';

test('should load to Converter and return string definition from arraybuffer', () => {
  const converter = new ArrayBufferConverter();
  converter.load(getBuffer()); // в качестве параметра передаю результат работы функции getBuffer()
  const result = converter.toString();
  expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
