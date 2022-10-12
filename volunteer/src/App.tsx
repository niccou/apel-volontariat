import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login/Login";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
