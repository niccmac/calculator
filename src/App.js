import "./App.css";
import ToDoProvider from "./components/providers/toDoProvider";
// import Calculator from "./components/calculator";
// import CardGame from "./components/cardGame";
// import ToDoForm from "./components/toDoForm";
import ToDoList from "./components/toDoList";
const App = () => {
  return (
    <div className="App">
      {/* <Calculator /> */}
      {/* <p>Duck</p> */}
      {/* <CardGame /> */}
      <ToDoProvider>
        <ToDoList />
      </ToDoProvider>
    </div>
  );
};

export default App;
