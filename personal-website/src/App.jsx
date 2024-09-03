import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import PortfolioApp from "@pages/Portfolio";

function App() {
  const [theme, setTheme] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/portfolio' />} />
        <Route
          path='/portfolio'
          element={<PortfolioApp theme={theme} setTheme={setTheme} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
