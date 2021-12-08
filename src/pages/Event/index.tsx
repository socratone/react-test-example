import { useState } from 'react';

const Event = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');

  const handleClick = () => {
    setCount((count) => count + 1);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value.length > 5) return;
    setValue(event.target.value);
  };

  return (
    <div>
      <h1>hello world</h1>
      <div>{count}</div>
      <button onClick={handleClick}>+</button>
      <input value={value} onChange={handleChange} />
    </div>
  );
};

export default Event;
