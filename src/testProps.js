import { createContext, useContext, useState } from "react";

const MsgContext = createContext();

function Son(props) {
  return (
    <>
      {props.children}
      <div>This is son</div>
      <div>{props.name}</div>
      <div>{props.child}</div>
      <button onClick={() => props.onGetMsg("I am son12312312")}>
        Click me
      </button>
    </>
  );
}

function A(props) {
  return (
    <>
      <button
        onClick={() => {
          props.onGetMsg("I am A, Hello B~");
        }}
      >
        Click me say hello to B
      </button>
      <B></B>
    </>
  );
}

function B(props) {
  const Msg = useContext(MsgContext);
  return (
    <>
      <div>{props.msg}</div>
      <div>{Msg}</div>
    </>
  );
}

function TestProps(props) {
  const [sayHello, setSayHello] = useState("");
  const onGetMessage = (msg) => {
    setSayHello(msg);
  };

  // ========分割线=========
  const name = "this is father name";
  const [msg, setMsg] = useState("");
  const getMsg = (msg) => {
    console.log(msg);
    setMsg(msg);
  };
  return (
    <>
      <MsgContext.Provider value={"this is app msg123123"}>
        <A onGetMsg={onGetMessage}></A>
      </MsgContext.Provider>
      <div>----</div>
      <B msg={sayHello}></B>

      <div>{props.children}</div>
      <Son
        name={name}
        age={18}
        isTrue={false}
        list={["Vue", "React"]}
        obj={{ name: "jack" }}
        cb={() => console.log(123)}
        child={<span style={{ color: "red" }}>This is span</span>}
        onGetMsg={getMsg}
      >
        <div>son标签的内部</div>
        <div>niubei</div>
        <div>{msg}</div>
      </Son>
      <div>=========</div>
    </>
  );
}

export default TestProps;
