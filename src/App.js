import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AOS from 'aos';
import "./custom.css";
import { Home } from "./components/pages/Home";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      disable: "phone",
    });
    AOS.refresh();

    function adjustFontSize() {
      if (window.innerWidth > 1440) {
        document.documentElement.style.fontSize = (window.innerWidth / 1920) * 16 + "px";
      }
      else { document.documentElement.style.fontSize = "16px"; }
    }
    window.addEventListener("resize", function () { adjustFontSize(); }, false);
    return window.removeEventListener('resize', adjustFontSize());
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
