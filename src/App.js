import "./App.css";
import LoginProvider from "./components/providers/loginProvider";
import ToDoProvider from "./components/providers/toDoProvider";
import CalcProvider from "./components/providers/calcProvider";
import Login from "./components/login";
import NavBarTab from "./components/nav/navBar";
import Calculator from "./components/calculator";
import CardGame from "./components/cardGame";
import ToDoForm from "./components/toDoForm";
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
      <LoginProvider>
        <CalcProvider>
          <ToDoProvider>
            <Router>
              {/* <Calculator /> */}
              {/* <p>Duck</p> */}

              {/* <CardGame /> */}
              <Routes>
                <Route index element={<NavBarTab />} />
              </Routes>
            </Router>
            <Calculator />
            <ToDoList />
          </ToDoProvider>
        </CalcProvider>
      </LoginProvider>
    </div>
  );
};

export default App;
