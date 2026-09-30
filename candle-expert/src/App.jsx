import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import "./index.css";
import useRevealObserver from "./hooks/useRevealObserver";
import ContactForm from "./Components/ContactForm";
import ThemeContext from "./Contexts/ThemeContext";
// import logoContext from "./Contexts/logo";
// import AuthContext from "./Contexts/Auth.context";

import Strip from "./Components/Strip";
import About from "./Components/About";
import Training from "./Components/Training";
import MarketTracker from "./Components/MarketTracker";
import Video from "./Components/Video";
import Approach from "./Components/Approach";
const App = () => {
  useRevealObserver();


  return (
    <ThemeContext.Provider value={{ title: "${}", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3BtiU-QvPyeeVnVGqGzikEy1TUhjxsiJkwPAXGGRbpw&s=10" }}>
      <div className="container">
          <Header />
          <main id="main">
            <Hero />
            <Strip />
            <About />
            <Training />
            <MarketTracker />
            <Video />
            <Approach />
            <ContactForm />
          </main>
          <Footer />
        </div>
    </ThemeContext.Provider>
  );
};

export default App;
