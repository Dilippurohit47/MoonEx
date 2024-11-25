import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SecondPage from "./pages/SecondPage";
import Footer from "./components/Footer"
function App() {
  return (
    <div className="bg-[#0A1825] ">
      <img src="/bg-img.png" alt=""  className="absolute"/>
      <Navbar />
      <HomePage />
      <SecondPage />
      <Footer />
    </div>
  );
}

export default App;