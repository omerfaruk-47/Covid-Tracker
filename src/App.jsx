import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage/index";
import MapPage from "./pages/MapPage";
import Header from "./components/Header/index";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<MapPage />} />
        <Route path="/detail/:country" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
