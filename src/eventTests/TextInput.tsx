import { useState } from 'react';

type TextInputProps = {
  initialValue?: string;
};

const TextInput = ({ initialValue = '' }: TextInputProps) => {
  const [value, setValue] = useState(initialValue);

  return (
    <div>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
    </div>
  );
};

export default TextInput;
