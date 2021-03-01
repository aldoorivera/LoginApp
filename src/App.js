import './App.css';
import  Login from "./components/Login/Login";
function App() {

  const style =["App", "flex","justify-center","items-center","p-5"]

  return (
    <div style={{backgroundColor:'pink'}} className={style.join(" ")}>
      
      <Login>

      </Login>
    </div>
  );
}

export default App;
