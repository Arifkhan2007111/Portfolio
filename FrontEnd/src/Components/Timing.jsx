import React, { useEffect, useState } from "react";

const Timing = ()=>{

    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        const timer = setInterval(()=>{
            setTime(new Date());
        }, 1000);

        return() => clearInterval(timer);
    }, []);

    return(
        <>
            <div className="time">
                {time.toLocaleTimeString()}
            </div>
        </>
    )
}

export default Timing