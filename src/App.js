import Header from "./Header/Header";
import Imgbox from "./Header/img-box/ImgBox";
import Navbar from "./Navbar/Navbar";
import Demos from "./Demos/Demos";
import Propertys from "./Propertys/Propertys";
import PageSliders from "./PageSlider/PageSliders";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Imgbox />
      <Demos />
      <Propertys />
      <PageSliders />
    </div>
  );
}

export default App;
