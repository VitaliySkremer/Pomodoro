import React from 'react';
import './App.scss';
import {Layout} from "./Components/Layout/Layout";
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";
import {FormCreateTask} from "./Components/FormCreateTask/FormCreateTask";
import {FormTask} from "./Components/FormTask/FormTask";

function App() {

  return (
    <Layout>
      <Header/>
      <Main>
        <FormCreateTask/>
        <FormTask/>
      </Main>
    </Layout>
  );
}

export default App;
