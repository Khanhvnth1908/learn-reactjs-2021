import react from "react";
import Album from "./features/Album";
import Todo from "./features/Todo";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Route exact path="/" component={Todo} />
      <Route path="/album" component={Album} />
      {/* <Todo />
      <Album/> */}
    </div>
  );
}

export default App;
