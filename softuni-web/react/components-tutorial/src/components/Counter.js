import { useState } from "react";

const getTitle = (count) => {
    switch (count) {
        case 1:
            return 'First Blood';
        case 2:
            return 'Double Kill';
        case 3:
            return 'Tripple Kill';
        case 4:
            return 'Ultra Kill - UNSTOPPABLE';
        case 5:
            return 'GODLIKE';
        default:
            return 'Counter';
    }
};

const Counter = (props) => {
    const [counter, setCounter] = useState(0);

    const incrementCounter = (e) => {
        setCounter(oldCount => oldCount + 1);
    };

    const decrementCounter = (e) => {
        setCounter(oldCount => oldCount - 1);
    };

    const clearCounter = () => {
        setCounter(0);
    };

    // let title = 'Counter';
    // if (counter == 1) {
    //     title = 'First blood';
    // } else if (counter == 2) {
    //     title = 'Double kill'
    // }

    return (
        <div>
            <p style={{fontSize: Math.max(counter, 1)  + '2px'}}>
                {counter > 5 
                ? 'GIGA CHAD' 
                : getTitle(counter)}
                : {counter}</p>

            <button onClick={decrementCounter}>-</button>

            {counter < 10 ? <button onClick={incrementCounter}>+</button> : null}

            {props.canReset && <button onClick={clearCounter}>Clear counter</button>}
        </div>
    );
}

export default Counter;