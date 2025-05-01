import React, { useState, useEffect } from 'react';

export default function X() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will run when the component mounts and whenever `count` changes
    console.log('Count has changed:', count);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
