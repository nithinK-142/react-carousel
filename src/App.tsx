import Carousel from "./components/Carousel";
import { slides } from "./data/carouselData";

function App() {
  return (
    <main className="app flex-center">
      <Carousel data={slides}/>
    </main>
  );
}

export default App;
