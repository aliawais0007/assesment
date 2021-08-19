import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AOS from 'aos';
import "./App.scss";
import { Home } from "./components/pages/Home";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      disable: "phone",
    });
    AOS.refresh();
  }, []);
  return (
    <Router>
      <Switch>
        <Route path="" exact={true}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
