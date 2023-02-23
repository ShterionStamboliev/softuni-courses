import { useState } from 'react';

const Timer = (props) => {
    let [seconds, setSeconds] = useState(props.start);

    setTimeout(() => setSeconds(seconds + 1), 
    1000);

    return (
        <div>
            <h2>Timer</h2>
            Time: {seconds}s
        </div>
    )
};

export default Timer;