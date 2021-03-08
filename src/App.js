import './App.css';
import  Login from "./components/Login/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Todo from "./components/pages/Todo.js";
function App() {

  const style =["App", "flex","justify-center","items-center","p-5"]

  return (
      <Router>
        <Switch>
          <Route path="/LoginApp/Todo">
            <Todo/>
          </Route>
          <Route exact path="/LoginApp">    
            <div style={{backgroundColor:'pink'}} className={style.join(" ")}>
              <Login/>
            </div>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
