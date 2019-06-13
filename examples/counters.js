import { StacheDefineElement, DefineObject, DefineArray, type } from "can";

class Counter extends DefineObject {
  static define = {
    count: 0
  };
  decrement() {
    this.count--;
  }
  increment() {
    this.count++;
  }
}

class CounterArray extends DefineArray {
  static items = type.convert(Counter);
}

class Counters extends StacheDefineElement {
  static view = `
    {{#for(counter of this.counters)}}
      <p>
        <button on:click="counter.decrement()">-1</button>
        <span>{{counter.count}}</span>
        <button on:click="counter.increment()">+1</button>
      </p>
    {{/for}}
  `;

  static define = {
    counters: {
      get default() {
        return new CounterArray({}, {}, {});
      }
    }
  };
}
customElements.define("count-ers", Counters);
