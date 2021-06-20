import "./App.css";
import Carousel from "./components/carousel/carousel";
import { SliderData } from "./components/carousel/sliderdata";
import Homepage from "./pages/homepage/homepage";
function App() {
  return (
    <div className="container">
      <Carousel slides={SliderData} />
      <Homepage />
    </div>
  );
}

export default App;
