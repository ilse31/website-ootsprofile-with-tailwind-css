import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Portofolio from "./components/Portofolio";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <Navbar />
      <Profile />
      <AboutMe />
      <Portofolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
