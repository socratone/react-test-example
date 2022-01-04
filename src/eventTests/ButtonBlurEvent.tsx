import { useState } from 'react';

const ButtonBlur = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onBlur={() => setShow(true)}>클릭</button>
      {show && <article>내용</article>}
    </div>
  );
};

export default ButtonBlur;
