import { Col, Container, Row } from 'react-bootstrap';

import Footer from './layout/Footer';
import Header from './layout/Header';
import Home from './layout/Home';
import Skills from './layout/Skills';
import Projects from './layout/Projects';
import Profile from './layout/Profile';

import './css/bootstrap.css';
import './App.css';


function App() {
  return (
    <>
      <Header />
      <Container>
        <Row><Col><Home /></Col></Row>
        <Row><Col><Profile /></Col></Row>
        <Row><Col><Skills /></Col></Row>
        <Row><Col><Projects /></Col></Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;