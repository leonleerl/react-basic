// 项目的根组件

import { useState } from "react";

// App被引入到index.js，接着被渲染到public/index.html(root)
const list = [
  { id: 1001, name: "Vue" },
  { id: 1002, name: "React" },
  { id: 1003, name: "Angular" },
];
const flag = false;
const articleType = 12313;
const bookNumber = 1;

function getArticleType(articleType) {
  if (articleType === 1) {
    return <div>1图文章</div>;
  } else if (articleType === 2) {
    return <div>两张图</div>;
  } else {
    return <div>3图</div>;
  }
}

function App() {
  const [bookNumber, setBookNumber] = useState(1);
  const [changeLoading, setChangeLoading] = useState(true);

  const handleClick = (name, e) => {
    setBookNumber(bookNumber + 1);
    console.log("dianji2", name, e);
  };

  const Button = ({ content }) => {
    return <button>{content}</button>;
  };

  function handleLoadingClick() {
    setChangeLoading(!changeLoading);
  }

  const LoadingButton = ({ name }) => {
    return (
      <>
        <button onClick={handleLoadingClick}>{name}</button>
      </>
    );
  };

  return (
    <div className="App">
      This is App
      <ol>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ol>
      {flag && <div>isLogin</div>}
      {changeLoading ? <div>loading...</div> : <div>loaded</div>}
      {getArticleType(articleType)}
      <div>{bookNumber}</div>
      <button onClick={(e) => handleClick("leonlee", e)}>click me</button>
      <Button content="123" />
      <LoadingButton name="change"></LoadingButton>
    </div>
  );
}

export default App;
