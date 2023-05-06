import Clock from "./Components/ClockComponent/Clock";
import Todo from "./Components/TodoComponent/Todo";

function App() {
  return (
    <div className="App">
      <div className="box">
        <div className="logo">
          <h1>Todo</h1>
        </div>
        <div className="functionality">
       <Todo/>
        </div>
      </div>
    </div>
  );
}

export default App;
