export default class ArrayBufferConverter {
  load(arrayBuffer) {
    this.arrayBuffer = arrayBuffer;
  }

  toString() {
    const bufferView = new Uint16Array(this.arrayBuffer);
    return String.fromCharCode(...bufferView);
  }
}
