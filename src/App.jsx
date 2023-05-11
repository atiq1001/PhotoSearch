import Container from '@mui/material/Container';

import './App.css'
import Header from "./components/Header.jsx";
import ImageContainer from './components/ImageContainer.jsx'
import Footer from "./components/Footer.jsx";

function App() {

  return (
    <Container
      sx={{
        m: 0,
        p: 0,
      }}>

      <Header />
      <ImageContainer />
      <Footer />
    </Container>
  )
}

export default App;
