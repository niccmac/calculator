import { useContext, useState, createContext } from "react";
import {} from "../providers/toDoProvider";
export const calcContext = createContext();

export default function CalcProvider(props) {
  //State
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const [calcOpen, setCalcOpen] = useState(false);

  // const { todoOpen, toggleTodo } = useContext(calcContext);

  // Operators
  const ops = ["/", "*", "+", "-", "."];
  // Add numbers and operators
  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };
  // Calculate
  const calaculator = () => {
    setCalc(eval(calc).toString());
  };
  // Delete last
  const deleteLast = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };
  const toggleCalc = () => {
    setCalcOpen((calcOpen) => !calcOpen);
  };
  const closeCalc = () => {
    setCalcOpen(false);
  };
  const exportValues = {
    deleteLast,
    calaculator,
    updateCalc,
    ops,
    calc,
    setCalc,
    result,
    setResult,
    calcOpen,
    toggleCalc,
    closeCalc,
  };
  return (
    <calcContext.Provider value={exportValues}>
      {props.children}
    </calcContext.Provider>
  );
}
export const useLogin = () => useContext(calcContext);
