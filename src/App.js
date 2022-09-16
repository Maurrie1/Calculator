
import './App.css';
import { useState } from "react"

//BRIEF OVERVIEW OF WHAT I LEARNED WHILE BUILDING THIS CALCULATOR
// 1. useState is scope specific. It only tracks the scope the of the react component it was created in.
// 2. I now know how (have been refreshed) to properly use the two values within the array you set to useState
// 3. I thought I was going to have to write some elaborate code to do the calculations. It turns out the eval method does all of that for me.

//BIGGEST CHALLENGES
// 1. There are a lot of moving pieces in regards to using the state. I understand it as I'm coding it, but afterwards following the code back up the pipeline to figure out what each function is doing or what each variable is initialized as is challenging. This is going to take repetition which is now my main priority. 

//FAVORITE PARTS
// 1. Definitely the css. Functional projects are satisfying. Having the project be functional and visually pleasing even more satisfying!
// 2. Solving the problems I ran in to while coding was gratifying. I've been coding and reading through documentation now for about 12 hours. Solving a problem I got stuck at for a while gave me that extra push to keep going.

//What I still need to figure out
// I was able to make the operators not be consecutively repeated. However for the decimal, if click a number, then click the decimal, and I keep repeating that process, I'll end up with a value that has multiple decimals that looks like this: 9.2.4.6.3. I need to make it to where I have only one decimal can be entered per string of numbers.

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const operators = ["/", "*", "+", "-", "."];

  const updateCalc = value => { // all buttons are a value
    if (
      operators.includes(value) && calc === "" ||
      operators.includes(value) && operators.includes(calc.slice(-1))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!operators.includes(value)) {
      setResult(eval(calc + value).toString())
    }
  };

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button
          onClick={() => updateCalc(i.toString())}
          key={i}>{i}
        </button>)
    }
    return digits;
  };

  const calculate = () => {
    setCalc(eval(calc).toString())
  };

  const deleteLast = () => {
    if (calc == "") {
      return;
    };

    const value = calc.slice(0. - 1);

    setCalc(value);
  };

  const clear = () => {
    setCalc("");
    setResult("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result}) </span> : ""}&nbsp;
          {calc || "0"}
        </div>

        <div className="operators">
          <button onClick={() => updateCalc("/")}>÷</button>
          <button onClick={() => updateCalc("*")}>x</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={deleteLast}>DEL</button>
          <button onClick={clear}>AC</button>
        </div>

        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>

          <button onClick={calculate}>=</button>
        </div>
      </div>

      {/* IDEA I DECIDED TO SCRAP
      I was going to list all the numbers manually but I decided to list them by iterating through them using a for loop. Below is my previous code. I was going to use css grid initially.
      
      
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand"></div>
          <div className="current-operand"></div>

          <button className="span-two">AC</button>
          <button>DEL</button>
          <button>÷</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>*</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>+</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>-</button>
          <button>.</button>
          <button>0</button>
          <button className="span-two">=</button>
        </div>
      </div> */}
    </div>
  );
}

export default App;
