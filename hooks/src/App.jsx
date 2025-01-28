import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UseRef from './hooks/UseRef'
import UseCallback from './hooks/UseCallback';
import UseMemo from './hooks/UseMemo';
import Home from './components/Home';

const App = () => {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/useRef" element={<UseRef />} />
      <Route path="/useCallback" element={<UseCallback />} />
      <Route path="/useMemo" element={<UseMemo />} />
    </Routes>
  )
}

export default App