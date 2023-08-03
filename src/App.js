import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';

import Footer from './layout/Footer';
import Header from './layout/Header';
import Home from './layout/Home';
import Skills from './layout/Skills';
import Career from './layout/Career';
import Profile from './layout/Profile';

import './css/bootstrap.css';
import './App.css';
import { useRef } from 'react';

function App() {

  const homeRef = useRef();
  const profileRef = useRef();
  const skillsRef = useRef();
  const careerRef = useRef();

  const handleHomeClick = (idx) => {

    switch(idx) {
      case 1:
        homeRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 2:
        profileRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 3:
        skillsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 4:
        careerRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  }

  return (
    <>
      <Header handleClick={handleHomeClick}/>
      <Container>
        <Row ref={homeRef}><Col><Home /></Col></Row>
        <Row ref={profileRef}><Col><Profile /></Col></Row>
        <Row ref={skillsRef}><Col><Skills /></Col></Row>
        <Row ref={careerRef}><Col><Career /></Col></Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;