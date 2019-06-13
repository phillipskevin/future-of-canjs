import { StacheDefineElement, DefineObject } from "can";

class Person extends DefineObject {
  static define = {
    name: { type: String, required: true }
  };
}

const justin = new Person({ name: "Justin" });
const anonymous = new Person();
// Uncaught Error: Missing required property [name].

class PersonEditor extends StacheDefineElement {
  static view = `
    <input value:bind="name">
  `;
  static define = {
    person: { type: Person, required: true } 
  };
}
customElements.define("person-editor", PersonEditor);

<person-editor person:from="thomasJefferson"></person-editor>

<person-editor></person-editor>
// Uncaught Error: Missing required property [person].
