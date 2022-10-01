import { useState } from "react";
import Header from "./components/Header";
import SecondaryNav from "./components/SecondaryNav";
import Main from "./components/Main";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import SignupForm from "./components/SignupForm";
import ImageContainer from "./components/ImageContainer";

function App() {
  const [navSelection, setNavSelection] = useState("");

  const handleNavClick = (e) => {
    console.log(e.target.innerText);
    setNavSelection(e.target.innerText);
  };

  return (
    <div>
      <Header />
      <SecondaryNav navClick={handleNavClick} />
      <Hero />
      <Main navClick={navSelection} />
      <ImageContainer />
      <SignupForm />
      <Footer />
    </div>
  );
}

export default App;
