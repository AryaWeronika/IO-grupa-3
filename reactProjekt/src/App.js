import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar"
import Glowna from "./pages/Glowna"
import Panel from "./pages/Panel"
import Uslugi from "./pages/Uslugi"
import Ankieta from "./pages/Ankieta"
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Glowna} />
        <Route path='/panel' component={Panel} />
        <Route path='/uslugi' component={Uslugi} />
        <Route path='/glowna' component={Glowna} />
        <Route path='/ankieta' component={Ankieta} />
      </Switch>
    </Router>
  );
}
  
export default App;