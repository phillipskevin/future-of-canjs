import { DefineObject } from "can";

class Todo extends DefineObject {
  static define = {};
}

const todo = new Todo();

todo.on("completed", () => console.log("completed set"));

todo.completed = false;
