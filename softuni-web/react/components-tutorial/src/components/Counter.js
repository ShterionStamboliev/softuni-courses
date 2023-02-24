import { useState } from "react";
import { setResetStyle, setStyleBlack, setStyleGreen, setStyleRed } from './Styles';

function Counter() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(oldCount => oldCount + 1);
    };

    const decrementCount = () => {
        setCount(oldCount => oldCount - 1);
    };

    const resetCount = () => {
        setCount(0);
    };

    return (
        <div>
            <p>You clicked {count} times</p>

            <button style={count > 0 ? setStyleBlack() : setStyleGreen()} onClick={() => incrementCount()}>Increment count</button>

            <button style={count > 0 ? setStyleRed() : setStyleBlack()} onClick={() => decrementCount()}>Decrement count</button>

            <button style={count > 9 ? setResetStyle() : setStyleBlack()} onClick={() => resetCount()}>Reset count</button>
        </div>
    );
};

export default Counter;