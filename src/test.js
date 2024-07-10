import { useRef, useState } from "react";

function Test() {
  const inputRef = useRef(null);
  const [tempContent, setTempContent] = useState("");
  const showDom = () => {
    console.log(inputRef.current);
    setTempContent(inputRef.current.toString());
  };
  return (
    <div>
      <input type="text" ref={inputRef}></input>
      <br></br>
      <div>{tempContent}</div>
      <br></br>
      <button onClick={showDom}>获取dom</button>
    </div>
  );
}

export default Test;
