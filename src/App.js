import "./App.css";
import TaskManager from "./components/TaskManager";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  return (
    <div className="App">
      <ThemeSwitcher>
        <TaskManager />
      </ThemeSwitcher>
    </div>
  );
}

export default App;
