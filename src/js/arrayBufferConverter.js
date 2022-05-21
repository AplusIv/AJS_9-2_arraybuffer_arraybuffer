export default class ArrayBufferConverter {
  /* constructor() {
    this.arrayBuffer = undefined;
  } */

  // load() {}

  toString(arrayBuffer) {
    const arr = [];
    const bufferView = new Uint16Array(arrayBuffer);
    for (let i = 0; i < bufferView.length; i += 1) {
      arr.push(String.fromCharCode(bufferView[i]));
    }
    return arr.join('');
  }
}
