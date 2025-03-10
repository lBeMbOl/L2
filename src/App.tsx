import { useState } from "react";
import "./App.css";
import { Header } from "./layout/header/Header";
import { Info } from "./layout/section/Info";
import { Main } from "./layout/section/Main";
import { Start } from "./layout/section/Start";
import { RegisterForm } from "./components/Registration/RegisterForm";

function App() {
  const [StartOn, setStartOn] = useState(true);
  return (
    <div className="App">
      <Header setStartOn={setStartOn} />
      <Main setStartOn={setStartOn} startOn={StartOn} />
      {StartOn ? <Info setStartOn={setStartOn} /> : <Start />}
      <RegisterForm />
    </div>
  );
}

export default App;
