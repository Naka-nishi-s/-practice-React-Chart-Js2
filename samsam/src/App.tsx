import { useState } from "react";
import Button from "./Button";
import GraphData from "./graphData";

function App() {
  // 初期設定
  const sampleData = [12, 22, 18, 24, 14, 32, 36, 69];
  const labels = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月"];
  const [axis, setAxis] = useState("x");
  const [graphType, setGraphType] = useState("Bar");

  // 型変更
  const changeGraphType = () =>
    graphType === "Bar" ? setGraphType("Line") : setGraphType("Bar");

  // 軸変更
  const changeAxis = () => (axis === "x" ? setAxis("y") : setAxis("x"));

  return (
    <>
      <GraphData
        labels={labels}
        sampleData={sampleData}
        axis={axis}
        graphType={graphType}
      />
      <Button text="軸変換" onClick={() => changeAxis()} />
      <Button text="型変換" onClick={() => changeGraphType()} />
    </>
  );
}

export default App;
