import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);
    return (

        <div className="flex flex-col items-center" >
            <button onClick={() => { setCounter(counter => counter + 1) }} className="bg-purple-400 p-5 rounded-xl text-white text-2xl">+</button>
            <p>{counter}</p>
            <button onClick={() => { setCounter(counter => counter - 1) }} className="bg-purple-400 p-5 rounded-xl text-white text-2xl">-</button>
        </div>
    );
}

export default Counter;
