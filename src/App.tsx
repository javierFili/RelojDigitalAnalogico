import React from "react";
import { Routes, Route } from "react-router-dom";
import ComponenteAnalogico from "./pages/analogico/Analogico";
import Inicio from "./pages/inicio/inicio";
import ComponenteDigital from "./pages/digital/Digital";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/RelojDigitalAnalogico" element={<Inicio />} />
        <Route path="/analogico" element={<ComponenteAnalogico />} />\
        <Route path="/digital" element={<ComponenteDigital />} />
      </Routes>
    </div>
  );
};

export default App;
