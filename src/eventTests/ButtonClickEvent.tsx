import { useState } from 'react';

const ButtonClickEvent = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(true)}>클릭</button>
      {show && <article>내용</article>}
    </div>
  );
};

export default ButtonClickEvent;
