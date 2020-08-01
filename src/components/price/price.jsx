import React, { useEffect, useRef } from "react";

export const Price = () => {
  const textareaRef = useRef();
  const createRef1 = useRef();
  const downloadlinkRef = useRef();

  // let textFile = null,
  //   makeTextFile = function (text) {
  //     let data = new Blob([text], { type: "text/plain" });
  //
  //     if (textFile !== null) {
  //       window.URL.revokeObjectURL(textFile);
  //     }
  //
  //     textFile = window.URL.createObjectURL(data);
  //
  //     return textFile;
  //   };
  //

  useEffect(() => {
    createRef1.current.addEventListener("click", () => {
      downloadlinkRef.current.href = `makeTextFile(${textareaRef.current.value})`;
      downloadlinkRef.current.style.display = "block";
    });
  });

  return (
    <div>
      <textarea ref={textareaRef}>Type something here</textarea>

      <button ref={createRef1}>Create file</button>
      <a download="info.txt" ref={downloadlinkRef} style={{ display: "none" }}>
        Download
      </a>

      <a download="test.txt" href="#">
        Button TEST
      </a>
    </div>
  );
};
