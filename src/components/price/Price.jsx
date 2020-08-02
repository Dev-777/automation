import React, { useRef } from "react";

export const Price = () => {
  // let name = "Price";
  // let text = `data:text/plain,${name}`;

  let inputRef = useRef();
  const f = () => {
    let str = inputRef.current.value;

    let reg = str.match(/[[]/g);

    console.log(reg);
  };

  return (
    <div>
      {/*<a download="filename.js" href={text}>*/}
      {/*  Download*/}
      {/*</a>*/}
      <input ref={inputRef} type="text" />
      <button onClick={f}>Ok</button>
    </div>
  );
};
