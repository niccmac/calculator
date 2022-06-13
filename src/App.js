import "./App.css";
import Login from "./components/login";
import LoginProvider from "./components/providers/loginProvider";
import NavBarTab from "./components/nav/navBar";
import ToDoProvider from "./components/providers/toDoProvider";
// import Calculator from "./components/calculator";
// import CardGame from "./components/cardGame";
// import ToDoForm from "./components/toDoForm";
import ToDoList from "./components/toDoList";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <Router>
        <LoginProvider>
          {/* <Calculator /> */}
          {/* <p>Duck</p> */}
          {/* <CardGame /> */}
          {/* <ToDoProvider>
        <ToDoList />
      </ToDoProvider> */}
          <Routes>
            <Route index element={<NavBarTab />} />
            {/* <Login /> */}
          </Routes>
        </LoginProvider>
      </Router>
    </div>
  );
};

export default App;
