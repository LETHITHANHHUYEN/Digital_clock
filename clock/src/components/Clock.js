import React, { useEffect, useState } from "react";

function Clock() {
    const [clockState, setClockState] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());
        }, 1000);
    }, []);

    return (
        <div style={{ fontSize: "32px", margin: "30px" }}>
            {clockState}
        </div>
    )
}

export default Clock;