import { StacheDefineElement } from "can";

class Timer extends StacheDefineElement {
    static view = `
        <p>App has been running for {{time}} seconds</p>
    `;

    static define = {
        time: { type: Number, default: 0 }
    };

    connected() {
        let intervalId = setInterval(() => {
            this.time++;
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }

    reset() {
      this.time = 0;
    }
}
customElements.define("time-er", Timer);



<time-er></time-er>




class Timer extends StacheDefineElement {
    static view = `
        <p>App has been running for {{time}} seconds</p>
    `;

    static define = {
        time: { type: Number, default: 0 }
    };

    connected() {
        let intervalId = setInterval(() => {
            this.time++;
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }

    reset() {
      this.time = 0;
    }
}
customElements.define("time-er", Timer);

const timer = new Timer();

timer.initialize({ time: 5 });
timer.time; // -> 5

timer.reset();
timer.time; // -> 0




const timer = new Timer();

timer.render({ time: 5 });
timer.innerHTML;
// <p>App has been running for 5 seconds</p>

timer.reset();
timer.innerHTML;
// <p>App has been running for 0 seconds</p>




const timer = new Timer();

timer.connect({ time: 5 });
timer.time; // -> 5
timer.innerHTML;
// <p>App has been running for 5 seconds</p>

// ... wait some time

timer.time; // -> 12
timer.innerHTML;
// <p>App has been running for 12 seconds</p>
