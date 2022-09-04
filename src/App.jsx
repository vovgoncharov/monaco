import "./assets/css/main.css";
import Header from "./Components/Header";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Cuits from "./Pages/Cuits";
import Works from "./Pages/Works";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <About />
      <Service />
      <Cuits />
      <Works />
      <Footer />
    </>
  );
}

export default App;
