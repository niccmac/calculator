import { useContext, useState, createContext } from "react";

export const loginContext = createContext();

export default function LoginProvider(props) {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const emailEntered = (e) => {
    setEmail(e.target.value);
  };
  const passwordEntered = (e) => {
    // TODO obfuscate pasword
    setPassword(e.target.value);
  };
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const loginHandler = () => {
    // TODO connect to backend - obfuscate pasword - cookie
    if (email && password) {
      setUser({
        email,
        password,
      });
    }
  };
  const exportValues = {
    open,
    onClose,
    onOpen,
    setUser,
    passwordEntered,
    emailEntered,
    loginHandler,
  };
  return (
    <loginContext.Provider value={exportValues}>
      {props.children}
    </loginContext.Provider>
  );
}
export const useLogin = () => useContext(loginContext);
