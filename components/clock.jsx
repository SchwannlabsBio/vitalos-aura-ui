import React, { useState, useEffect } from 'react';

export default function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        let timer = setInterval(() => setTime(new Date()), 1000);
        // clean-up this side effect
        return function cleanup() {
            clearInterval(timer);
        };
    });

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    let strTime = hours + ':' + minutes + ' ' + ampm;

    return (
        <span className="font-bold">{ strTime }</span>
    );
}

