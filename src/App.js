import "./styles.css";
import Tooltip from "./Tooltip";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw"
      }}
    >
      <Tooltip text="This is my tooltip!" position="left">
        <button>Hover over me!</button>
      </Tooltip>
    </div>
  );
}
