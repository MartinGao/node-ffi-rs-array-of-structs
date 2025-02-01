const { open, load, define, createPointer, arrayConstructor, funcConstructor, unwrapPointer, DataType } = require('ffi-rs');

const libtiraysdkDynamicLib = './libfoo.so';
open({ library: 'libfoo', path: libtiraysdkDynamicLib });

const fooStructType = { ValueA: DataType.I32, ValueB: DataType.I32, ffiTypeTag: DataType.StackStruct };
const fooStructValue = { ValueA: 10, ValueB: 20 };

load({
  library: 'libfoo',
  funcName: 'SingleStruct',
  retType: DataType.I32,
  paramsType: [fooStructType],
  paramsValue: [fooStructValue],
});

const fooStructArrayType = arrayConstructor({
  type: DataType.StructArray,
  structItemType: fooStructType,
  ffiTypeTag: DataType.StackArray,
  length: 1,
});
const fooStructArrayValue = [fooStructValue, fooStructValue, fooStructValue];

load({
  library: 'libfoo',
  funcName: 'MultiStruct',
  retType: DataType.I32,
  paramsType: [fooStructArrayType, DataType.I32],
  paramsValue: [fooStructArrayValue, fooStructArrayValue.length],
});