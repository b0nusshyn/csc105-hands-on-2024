import Navbar from "./component/Navbar";
import About from "./pages/about";
import Gallery from "./pages/gallery";
import Home from "./pages/home";


function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
      <Gallery/>
    </div>
  );
}

export default App;