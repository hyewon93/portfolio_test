import { useState } from 'react';
import { Badge, Col, Container, ListGroup, Row } from 'react-bootstrap';
import '../css/portfolio.css';

import PortfolioModal from '../components/PortfolioModal';
import PDFViewer from '../components/PDFViewer';

import recommendation_pdf from '../file/hyewon_letter_of_recommendation.pdf';
import mchn_logo from '../images/career/mchn_logo.png';
import ProjectModal from '../components/ProjectModal';

const Career = () => {
    const [pdfShow, setPDFShow] = useState(false);
    const [projectShow, setProjectShow] = useState(false);

    const handlePDFClose = () => setPDFShow(false);
    const handlePDFShow = () => setPDFShow(true);
    
    const [project, setProject] = useState({
        id: 1,
        type: "MPM",
    });

    const handleProjectClose = () => setProjectShow(false);
    const handleProjectShow = (type, id) => {

        setProjectShow(true);  

        setProject({
            id: id,
            type: type
        })
    }

    return (
        <div className="home_container layout_Career">
            <div className="section_title">
                CAREER
            </div>
            <div className="section_container">
                <Container>
                    <Row className="career_section">
                        <Col className="career_pic_container" sm={4}>
                            <div className="career_pic">
                                <img className="career_image" src={mchn_logo} alt="mchn_logo"/>
                            </div>
                        </Col>
                        <Col className="career_detail_container" sm={8}>
                            <Container>
                                <Row>
                                    <Col>
                                        <h3>My Passion Media</h3>
                                        <h5>2020 - 2023</h5>
                                    </Col>
                                </Row>
                                <Row className="career_blank"></Row>
                                <Row>
                                    <Col>
                                        The <b>MCHN</b> is an e-commerce platform for online stores and retail point-of-sale systems. MCHN
                                        offers online retailers a suite of services including payments, marketing, shipping and
                                        customer engagement tools.
                                    </Col>
                                </Row>
                                <Row className="career_blank"></Row>
                                <Row>
                                    <Col>
                                        As a <b>full stack developer</b>, my role was not only improving MCHN UI/UX, but also integrating multiple external APIs. 
                                    </Col>
                                </Row>
                                <Row className="career_blank"></Row>
                                <Row>
                                    <Col>
                                        <button type="button" className="btn btn-link career_recommendation" onClick={handlePDFShow}>
                                            Letter of recommendation by Gilbert Comeau, Head of Development
                                            <span className="material-icons career_icon">preview</span>
                                        </button>
                                    </Col>
                                </Row>
                                <Row className="career_blank"></Row>
                                <Row>
                                    <Col>
                                        <Badge className="career_badge" bg="purple">PHP</Badge>
                                        <Badge className="career_badge" bg="primary">REST API</Badge>
                                        <Badge className="career_badge" bg="info">Javascript</Badge>
                                        <Badge className="career_badge" bg="success">jQuery</Badge>
                                        <Badge className="career_badge" bg="danger">HTML</Badge>
                                        <Badge className="career_badge" bg="warning">CSS</Badge>
                                        <Badge className="career_badge" bg="dark">mySQL</Badge>
                                    </Col>
                                </Row>
                                <Row className="career_underline"></Row>
                                <Row>
                                    <Col>
                                        <h4>Major Projects</h4>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <ListGroup>
                                            <ListGroup.Item><button type="button" className="btn btn-light" onClick={() => handleProjectShow("MPM", 0)}>3rd Party eCommerce Platform Integration</button></ListGroup.Item>
                                            <ListGroup.Item><button type="button" className="btn btn-light" onClick={() => handleProjectShow("MPM", 1)}>MCHN UI V3</button></ListGroup.Item>
                                            <ListGroup.Item><button type="button" className="btn btn-light" onClick={() => handleProjectShow("MPM", 2)}>MCHN Pay</button></ListGroup.Item>
                                            <ListGroup.Item><button type="button" className="btn btn-light" onClick={() => handleProjectShow("MPM", 3)}>Stripe Payment Intent API</button></ListGroup.Item>
                                            <ListGroup.Item><button type="button" className="btn btn-light" onClick={() => handleProjectShow("MPM", 4)}>Report Automation</button></ListGroup.Item>
                                            <ListGroup.Item><button type="button" className="btn btn-light" onClick={() => handleProjectShow("MPM", 5)}>Two-Factor Authentication (2FA)</button></ListGroup.Item>
                                        </ListGroup>`
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    <Row className="career_section">
                        <Col className="career_pic_container" sm={4}>
                            <div className="career_pic">
                                <img className="career_image" src="" alt="updating..."/>
                            </div>
                        </Col>
                        <Col className="career_detail_container" sm={8}>
                            <Container>
                                <Row>
                                    <Col>
                                        <h3>Airsoft</h3>
                                        <h5>2016 - 2019</h5>
                                    </Col>
                                </Row>
                                <Row className="career_blank"></Row>
                                <Row>
                                    <Col>
                                        Airsoft is one of the most significant SI companies in the <b>airline industry</b>. 
                                        The company is operating an in-house R&D team for airline solution and it's the only provider of self-devzeloped CRS in Korea.
                                    </Col>
                                </Row>
                                <Row className="career_blank"></Row>
                                <Row>
                                    <Col>
                                        As an <b>web developer</b>, I collaborated with <i><u>Asiana Airlines' IT team</u></i> for several years within the organization. 
                                        My responsibilities included creating their <b>flight booking system</b> and gaining expertise in integrating the interface into the <b>CRS</b> (Amadeus).
                                    </Col>
                                </Row>
                                <Row className="career_blank"></Row>
                                <Row>
                                    <Col>
                                        <Badge className="career_badge" bg="primary">JAVA</Badge>
                                        <Badge className="career_badge" bg="info">Spring Framework</Badge>
                                        <Badge className="career_badge" bg="danger">Javascript</Badge>
                                        <Badge className="career_badge" bg="success">jQuery</Badge>
                                        <Badge className="career_badge" bg="purple">HTML</Badge>
                                        <Badge className="career_badge" bg="warning">CSS</Badge>
                                        <Badge className="career_badge" bg="dark">Oracle</Badge>
                                    </Col>
                                </Row>
                                <Row className="career_underline"></Row>
                                <Row>
                                    <Col>
                                        <h4>Major Projects</h4>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <ListGroup>

                                        </ListGroup>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
            <PortfolioModal show={pdfShow} title="Letter of Recommendation" body={<PDFViewer pdfFile={recommendation_pdf} />} handleClose={handlePDFClose}/>
            <ProjectModal show={projectShow} type={project.type} id={project.id} handleClose={handleProjectClose}/>
        </div>
    )
}

export default Career;