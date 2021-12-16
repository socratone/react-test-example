import React, { useEffect, useState } from 'react';

const BlurEvent = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (value === '') setError('값을 입력하세요.');
    else setError('');
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleBlur = () => {
    setTouched(true);
  };

  return (
    <div>
      <div>
        <input value={value} onChange={handleChange} onBlur={handleBlur} />
      </div>
      {touched && !!error && <p>{error}</p>}
      <button>클릭</button>
    </div>
  );
};

export default BlurEvent;
