import Features from "./components/Features";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import "./App.css";
import Services from "./container/Services";
import Footer from "./container/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Features />
      <Pricing />
      <Services />
      <Footer />
    </div>
  );
};
export default App;
