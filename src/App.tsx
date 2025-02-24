import "./App.css";
import styled from "styled-components";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/section/main/Main";
import { Info } from "./layout/section/info/Info";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Info />
    </div>
  );
}

export default App;
