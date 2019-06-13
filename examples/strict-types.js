import { DefineObject, type } from "can";

class Obj extends DefineObject {
  static define = {
    number: { type: Number },
    maybeString: { type: type.maybe(String) },
    convertString: { type: type.convert(String) },
    maybeConvertString: { type: type.maybeConvert(String) }
  };
}

const obj = new Obj();

obj.number = 5; // -> 5
obj.number = "10";
// Uncaught Error: Type value '10' is not of type Number.

obj.maybeString = "Hi"; // -> "Hi"
obj.maybeString = null; // -> null
obj.maybeString = undefined; // -> undefined
obj.maybeString = 10; // -> undefined
// Uncaught Error: Type value '10' is not of type String.

obj.convertString = "Hi"; // -> "Hi"
obj.convertString = null; // -> "null"
obj.convertString = undefined; // -> "undefined"
obj.convertString = 10; // -> "10"

obj.maybeConvertString = "Hi"; // -> "Hi"
obj.maybeConvertString = null; // -> null
obj.maybeConvertString = undefined; // -> undefined
obj.maybeConvertString = 10; // -> "10"
