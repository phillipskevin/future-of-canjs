import { DefineArray, DefineObject } from "can";

class Todo extends DefineObject {
  static define = {
    name: String,
    complete: { type: Boolean, default: false }
  };
}

class TodoList extends DefineArray {
  static items = Todo;
}
