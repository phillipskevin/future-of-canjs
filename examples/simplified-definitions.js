import { DefineObject } from "can";

class MyType extends DefineObject {
  static define = {
    getter: {
      get() { }
    },
    asyncGetter: {
      async(resolve) {
        return MyModel.getList().then(resolve);
      }
    },
    promise: {
      async() {
        return MyModel.getList();
      }
    },
    boolean: { type: Boolean },
    string: { type: String },
    number: { type: Number },
    booleanWithDefault: false,
    stringWithDefault: "🙈 🙉 🙊",
    numberWithDefault: 42,
    aFunction: {
      default: function() {}
    },
    aRendererFunction: stache("{{greeting}} World!"),
    object: {
      get default() {
        return {};
      }
    },
    enumerableProp: {
      enumerable: true,
      serialize(val) {
        return { some: val };
      }
    }
  };
}
