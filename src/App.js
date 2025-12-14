import logo from "./logo.svg";
import "./App.css";
import UsersList from "./components/UsersList";
import UserSort from "./components/UserSort";
import Login from "./components/Login";
import Stopwatch from "./components/StopWatch";
import StopWatchMine from "./components/StopWatchMine";
import Todo from "./components/Todo";
import CustomStepCounter from "./components/CustomStepCounter";
import DynamicShopping from "./components/DynamicShopping";
import TrafficLight from "./components/TrafficLight";
import SnakeLadder from "./components/SnakeLadder";

function App() {
  return (
    <div className="App">
      <div style={{ marginRight: 10 + "em" }}>
        <UsersList />
      </div>
      <div style={{ marginRight: 10 + "em" }}>
        <UserSort />
      </div>
      <div style={{ marginRight: 10 + "em" }}>
        <Login />
      </div>
      <div style={{ marginRight: 10 + "em" }}>
        <StopWatchMine />
      </div>
      <div style={{ marginRight: 10 + "em" }}>
        <Todo />
      </div>
      <div style={{ marginRight: 10 + "em" }}></div>
      <div style={{ marginRight: 10 + "em" }}>
        <DynamicShopping />
      </div>
      <div style={{ marginRight: 10 + "em" }}>
        <TrafficLight />
      </div>
      <div style={{ marginRight: 10 + "em" }}>{/* <SnakeLadder /> */}</div>
    </div>
  );
}

export default App;
