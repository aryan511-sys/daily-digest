import React, { useState } from 'react'

function ReactHook1() {

    const [count, setCount] = useState(0);
    
    return (
        <div className='text-center'>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Add Number
            </button>
            <button className='mx-3' onClick={() => setCount(count - 1)}>
                Back Number
            </button>

        </div>
    )
}

export default ReactHook1
