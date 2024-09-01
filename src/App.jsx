import { useEffect, useState } from "react";
import Navigation from './Components/Navigation'
import Hero from "./Components/Hero";
import Backgorund from "./Components/Backgorund";
import Navbar from "./Components/Navbar";
const App = () => {
  const heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Ingulge", text2: "your passions" },
    { text1: "Give in to", text2: "your passions" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);
  useEffect(() => {
    setInterval(() => {
      return setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 3000);
  }, []);

  return (
    <div>
      {/* <Navigation /> */}
      <Navbar/>
      <Backgorund playStatus={playStatus} heroCount={heroCount} />
      <Hero
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
        setPlayStatus={setPlayStatus}
      />
    </div>
  );
};

export default App;
