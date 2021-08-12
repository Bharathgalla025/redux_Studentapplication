import logo from './logo.svg';
import './App.css';
import { Switch,Route } from "react-router-dom";
import Home from './pages/Home';
import Addstudent from './pages/Addstudent';
import Editstudent from './pages/Editstudent';
function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/addstudent' component={Addstudent}/>
      <Route exact path='/editstudent/:id' component={Editstudent}/>
    </Switch>
    </div>
  );
}

export default App;
