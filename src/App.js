import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
