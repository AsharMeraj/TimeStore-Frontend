import HomePage from "./Components/HomePage";
import About from "./Components/About";
import Arrival from "./Components/Arrival";
import Showcase from "./Components/Showcase";
import Slider from "./Components/SliderMenu";


export default async function Home() {
  return (

      <main>
        <HomePage />
        <About />
        <Arrival />
        <Showcase />
        <Slider />
      </main>
  );
}
