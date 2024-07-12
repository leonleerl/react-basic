import { useEffect, useState } from "react";

const URL = "http://geek.itheima.net/v1_0/channels";

function SecretContent() {
  return (
    <>
      <div>secret</div>
    </>
  );
}

function Timer() {
  const [name, setName] = useState(1);
  useEffect(() => {
    const timer = setInterval(() => {
      setName(name + 1);
    }, 1000);
    return () => {
      // 清楚副作用（组件卸载时）
      clearInterval(timer);
    };
  }, [name]);
  return (
    <>
      <div>{name}</div>
    </>
  );
}

function TestEffect() {
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // 获取频道列表
    async function getList() {
      const res = await fetch(URL);
      const json = await res.json();
      setList(json.data.channels);
      console.log(list);
    }
    // getList();
    console.log("effect excecuted");
  }, [count]);
  return (
    <>
      <div>this is app</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +{count}
      </button>
      <br></br>
      <SecretContent />
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      {show && <Timer />}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        定时器开关
      </button>
    </>
  );
}

export default TestEffect;
