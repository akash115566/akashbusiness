import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import Footer from "./Pages/Footer";
import About from "./Pages/About";
import Award from "./Pages/Award";
import Service from "./Pages/Service";
import Video from "./Pages/Video";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import Founder from "./Pages/Founder";
import Mission from "./Pages/Mission";
import Whyus from "./Pages/Whyus";
import ScrollToTop from "./Pages/ScrollToTop";
import Privacy from "./Pages/Privacy";
import Terms from "./Pages/Terms";
import FormPage from "./Pages/FormPage";
import Associate from "./Pages/Associate";
import Legal from "./Pages/Legal";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
             <Route path="/award" element={<Award />} />
             <Route path="/service" element={<Service />} />
             <Route path="/video" element={<Video />} />
               <Route path="/gallery" element={<Gallery />} />
               <Route path="/contact" element={<Contact />} />
                 <Route path="/founder" element={<Founder />} />
                 <Route path="/mission" element={<Mission />} />
                 <Route path="/why-us" element={<Whyus />} />
                 <Route path="/privacy" element={<Privacy />} />
                 <Route path="/terms" element={<Terms />} />
                 <Route path="/formPage" element={<FormPage />} />
                  <Route path="/associate" element={<Associate />} />
                  <Route path="/legal" element={<Legal />} />
              
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
