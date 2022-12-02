import './App.scss';
import {Layout} from "./Components/Layout/Layout";
import {Header} from "./Components/Header/Header";
import {NavigateRoutes} from "./Components/NavigateRoutes/NavigateRoutes";

function App() {

  return (
    <Layout>
      <Header/>
      <main className="container">
        <NavigateRoutes/>
      </main>
    </Layout>
  );
}

export default App;
