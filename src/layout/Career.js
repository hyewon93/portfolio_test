import { Badge, Col, Container, ListGroup, Row } from 'react-bootstrap';
import '../css/portfolio.css';

import mchn_logo from '../images/career/mchn_logo.png';

const Career = () => {
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
                                <img class="career_image" src={mchn_logo} alt="mchn_logo"/>
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
                                        <Badge className="career_badge" bg="primary">PHP</Badge>
                                        <Badge className="career_badge" bg="info">Javascript</Badge>
                                        <Badge className="career_badge" bg="success">jQuery</Badge>
                                        <Badge className="career_badge" bg="danger">HTML</Badge>
                                        <Badge className="career_badge" bg="warning">CSS</Badge>
                                        <Badge className="career_badge" bg="dark">mySQL</Badge>
                                    </Col>
                                </Row>
                                <Row className="career_underline"></Row>
                                <Row>
                                    <Col><h4>Projects</h4></Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <ListGroup>
                                            <ListGroup.Item>3rd Party eCommerce Platform Integration</ListGroup.Item>
                                            <ListGroup.Item>MCHN UI V3</ListGroup.Item>
                                            <ListGroup.Item>MCHN Pay</ListGroup.Item>
                                            <ListGroup.Item>Site Performance</ListGroup.Item>
                                            <ListGroup.Item>Report Automation</ListGroup.Item>
                                            <ListGroup.Item>Multi Language</ListGroup.Item>
                                            <ListGroup.Item>Stripe Payment Intent API</ListGroup.Item>
                                            <ListGroup.Item>Two-Factor Authentication (2FA)</ListGroup.Item>
                                        </ListGroup>`
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    <Row className="career_section">
                        <Col className="career_pic_container" sm={4}>
                            <div className="career_pic">
                                <img class="career_image" src={mchn_logo} alt="mchn_logo"/>
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
                                <Row>
                                    
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Career;