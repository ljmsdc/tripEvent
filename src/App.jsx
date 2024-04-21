import { useState } from "react";

import Login from "./view/Login";
import Signup from "./view/Signup";
import Nav from "./components/Nav";
import Trip from "./view/Trip";
import Awards from "./view/Awards";
import Quiz from "./view/Quiz";
import Raffle from "./view/Raffle";
import Report from "./view/Report";

const App = () => {
  const [screen, setScreen] = useState("");

  const screenHandler = (element) => {
    console.log(element.target.innerText);
    setScreen(element.target.innerText);
  };

  return (
    <>
      <Nav handler={screenHandler} />
      {screen == "Login" && <Login />}
      {screen == "Signup" && <Signup />}
      {screen == "Trip" && <Trip />}
      {screen == "Awards" && <Awards />}
      {screen == "Quiz" && <Quiz />}
      {screen == "Raffle" && <Raffle />}
      {screen == "Report" && <Report />}
    </>
  );
};

export default App;
