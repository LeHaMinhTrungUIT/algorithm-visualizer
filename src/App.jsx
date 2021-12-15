import React from "react";
import styled from "styled-components";
import { NavBar } from "./components/NavBar";
import { Controller } from "./components/Controller";
import { AlgoDisplay } from "./components/AlgoDisplay";

import LinkedList from "./components/LinkedList";


const Container = styled.div`
  margin: 0 10px;
  min-height: calc(100vh - 50px);
  position: relative;
  margin-bottom: 50px;
`;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Controller/>
        <AlgoDisplay/>

        <h3>Linked List</h3>
        <LinkedList/>

        <h3>Binary Tree</h3>
        <div id="mainContent"></div>

      </div>
    );
  }
}

export default App;
