
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Admin from './Components/Admin/Admin';
import AddProduct from './Components/AddProduct/AddProduct';
import EditProduct from './Components/EditProduct/EditProduct';
function App() {
  return (
    <Router>
      <Header></Header>

      <Switch>
        <Route path="/addProduct">
          <AddProduct></AddProduct>
        </Route>
        <Route path="/editProduct">
          <EditProduct></EditProduct>
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
