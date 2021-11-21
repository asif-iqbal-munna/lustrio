import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { teal, indigo } from "@mui/material/colors";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

const theme = createTheme({
  palette: {
    primary: {
      main: teal[500],
      light: teal[400],
    },
    secondary: {
      main: indigo[600],
      light: indigo[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
