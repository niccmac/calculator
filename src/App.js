import "./App.css";
import Login from "./components/login";
import LoginProvider from "./components/providers/loginProvider";
import NavBarTab from "./components/nav/navBar";
import ToDoProvider from "./components/providers/toDoProvider";
// import Calculator from "./components/calculator";
// import CardGame from "./components/cardGame";
// import ToDoForm from "./components/toDoForm";
import ToDoList from "./components/toDoList";
const App = () => {
  return (
    <div className="App">
      <LoginProvider>
        {/* <Calculator /> */}
        {/* <p>Duck</p> */}
        {/* <CardGame /> */}
        {/* <ToDoProvider>
        <ToDoList />
      </ToDoProvider> */}
        <NavBarTab></NavBarTab>
        {/* <Login /> */}
      </LoginProvider>
    </div>
  );
};

export default App;
