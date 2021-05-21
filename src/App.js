
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Admin from './Components/Admin/Admin';
function App() {
  return (
    <Router>
      <Header></Header>

      <Switch>
        <Route path="/about">
          {/* <About /> */}
        </Route>
        <Route path="/admin">
          <Admin></Admin>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>


  );
}

export default App;
