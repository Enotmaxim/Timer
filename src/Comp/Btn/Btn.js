import React from 'react';
import "./Btn.css"

function Btn ({ start, stop, reset, resume, status }) {
    return (
        <div>
            <button className="starting"
                        onClick={start}>START</button>
            <button className="stopping"
                        onClick={stop}>STOP</button>
            <button className="resetting"
                onClick={reset}>RESET</button>
        </div>
    );
}

export default Btn;