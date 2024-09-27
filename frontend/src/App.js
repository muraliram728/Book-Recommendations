import './App.css';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import { Toolbar, Box } from "@mui/material";
import Home from './components/layouts/Home/Home';

function App() {
  return (
    <Box className="App">
      <Header />
      <Toolbar /> 
      <Box sx={{ mt: -2 }}> 
        <Home />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
