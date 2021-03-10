import './App.css';
import  Login from "./components/Login/Login";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Todo from "./components/todo/Todo.js";
function App() {

  const style =["App", "flex","justify-center","items-center","p-5"]

  return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/Todo">
            <Todo/>
          </Route>
          <Route exact path="/">    
            <div className={style.join(" ")}>
              <Login/>
            </div>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
