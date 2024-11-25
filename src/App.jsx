import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SecondPage from "./pages/SecondPage";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="  relative bg-[#0A1825]">
      <img
        src="/bg-img.png"
        alt="Background"
        className="absolute z-0 inset-0"
      />
      <div className="z-10 relative">
        <Navbar />
        <HomePage />
        <SecondPage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
