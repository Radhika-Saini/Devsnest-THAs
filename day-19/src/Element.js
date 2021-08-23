import React, {useState} from "react";
import './Element.css'

function Element() {
    var [count, setCount] = useState(0);
    return (
        <div className="element-card">
            <button onClick={() => {count++; setCount(count)}}>{count}</button>
        </div>
    )
}

export default Element;