import React, { useState } from 'react';

const App = () => {
  // Initializing counter state using useState hook
  const [count, setCount] = useState(0);

  // Event handler for button click
  const handleClick = () => {
    // Incrementing the count by 1
    setCount(count + 1);
  };

  return (
    <div>
      {/* Displaying the count */}
      <p>Button clicked {count} times</p>
      {/* Button with onClick event */}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default App;
