import Header from "./Header/Header";
import Imgbox from "./Header/img-box/ImgBox";
import Navbar from "./Navbar/Navbar";
import Demos from "./Demos/Demos";
import Propertys from "./Propertys/Propertys";
import PageSliders from "./PageSlider/PageSliders";
import AboutThemes from "./AboutTheme/AboutThemes";
import Plugins from "./Plugins/Plugins";
import AbouteResponsive from "./AboutTheme/AboutResponsiveTheme/AboutResponsive";
import Tools from "./Tools/Tools";
import Footer from "./Footer/Footer";

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
      <AbouteResponsive /> 
      <Tools />
      <Footer />
    </div>
  );
}

export default App;
