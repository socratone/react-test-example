import { useState } from 'react';

const Basic = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <h1>hello world</h1>
      <div>{count}</div>
      <button onClick={handleClick}>+</button>
    </div>
  );
};

export default Basic;
