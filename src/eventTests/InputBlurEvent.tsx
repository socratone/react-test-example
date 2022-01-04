import { useState } from 'react';

const InputBlurEvent = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <input onBlur={() => setShow(true)} />
      {show && <article>내용</article>}
    </div>
  );
};

export default InputBlurEvent;
