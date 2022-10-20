import React, { useState, useEffect } from "react";
import { ColorfulMessage } from "./compnents/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlg] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwithFlg = () => {
    setFaceShowFlg(!faceShowFlag);
  };

  useEffect(() => {
    console.log("useeffect");
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlg(true);
      } else {
        faceShowFlag && setFaceShowFlg(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwithFlg}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>kao</p>}
    </>
  );
};

export default App;
