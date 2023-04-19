import Header from "./Header/Header";
import Imgbox from "./Header/img-box/ImgBox";
import Navbar from "./Navbar/Navbar";
import Demos from "./Demos/Demos";
import Propertys from "./Propertys/Propertys";
import PageSliders from "./PageSlider/PageSliders";
import AboutThemes from "./AboutTheme/AboutThemes";
import Plugins from "./Plugins/Plugins";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Imgbox />
      <Demos />
      <Propertys />
      <PageSliders />
      <AboutThemes />
      <Plugins />
    </div>
  );
}

export default App;
