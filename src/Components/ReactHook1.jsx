import React, { useState , useEffect } from 'react'

function ReactHook1() {

    const [count, setCount] = useState(0);
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
      });
    

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
