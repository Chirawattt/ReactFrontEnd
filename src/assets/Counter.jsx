import { useState  } from "react"; // define variable

export default function Counter() {
    const [count, setCount] = useState(0); // count is variable and setCount is function to change value of count
    function increment() {
        setCount(count + 1);
    }
    function decrement() {
        setCount(count - 1);
    }
    

    return (
        <div>
            <h1>Count value is: {count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    );
    
}