import { useEffect } from "react";
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
    <div>
      <Home />
    </div>
  );
}

export default App;
