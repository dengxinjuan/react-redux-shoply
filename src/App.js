import "./App.css";
import NavBar from "./NavBar";
import ProductList from "./ProductList";

import Routed from "./Route";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routed />
    </div>
  );
}

export default App;
