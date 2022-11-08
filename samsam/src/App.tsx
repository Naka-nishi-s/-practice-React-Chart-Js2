import { Graph, options } from "./graph";
import { Bar } from "react-chartjs-2";

function App() {
  return (
    <div>
      <Bar options={options} data={Graph} />
    </div>
  );
}

export default App;
