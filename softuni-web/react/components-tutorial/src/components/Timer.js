import { useState } from 'react';

const Timer = (props) => {
    let [seconds, setSeconds] = useState(props.start);

    console.log('seconds - ' + seconds);

    return (
        <div>
            Time: {seconds}s
        </div>
    )
};

export default Timer;