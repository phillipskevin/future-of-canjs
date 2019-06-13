import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { StacheDefineElement } from "can";

class Counter extends StacheDefineElement {
  static view = `
    <button on:click="decrement()">-1</button>
    <span>{{this.count}}</span>
    <button on:click="increment()">+1</button>
  `;

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
customElements.define("count-er", Counter);

const ReactCounter = () => {
  const [count, setCount] = useState(0);
  const counter = useRef();

  const decrement = () => {
    setCount( count - 1 );
  };

  const increment = () => {
    setCount( count + 1 );
  };

  useEffect(() => {
    const el = counter.current;
    el.count = count;
    el.decrement = decrement;
    el.increment = increment;
  });

  return (
    <div>
      <count-er ref={counter}></count-er>
      <p>Count: {count}</p>
    </div>
  );
};

export { ReactCounter };
