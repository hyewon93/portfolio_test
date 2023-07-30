import { Col, Container, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import '../css/portfolio.css';

import profile from '../images/profile/profile.jpg';
import gmail from '../images/profile/Gmail-icon.png';
import linkedin from '../images/profile/LinkedIn-icon.png';
import github from '../images/profile/GitHub-icon.png';

const Profile = () => {

    const renderTooltip = (text, props) => (
        <Tooltip id="button-tooltip" {...props}>
            {text}
        </Tooltip>
    );

    return (
        <div className="home_container layout_profile">
            <div className="section_title">
                PROFILE
            </div>
            <div className="section_container">
                <Container>
                    <Row>
                        <Col className="profile_pic_container">
                            <div className="profile_pic">
                                <img class="profile_image" src={profile} alt="profile"/>
                            </div>
                        </Col>
                        <Col className="profile_detail_container">
                            <Container>
                                <Row>
                                    <Col>
                                        <h1>Hyewon Bae</h1>
                                        <h4>Web Developer</h4>
                                    </Col>
                                </Row>
                                <Row className="profile_blank"></Row>
                                <Row>
                                    <Col>
                                        <p>
                                            <OverlayTrigger placement="left" delay={{ show: 250, hide: 400 }} overlay={renderTooltip("Residence")}>
                                                <span class="material-icons profile_icon">location_on</span>
                                            </OverlayTrigger>
                                            
                                            Vancouver, Canada
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p>
                                            <OverlayTrigger placement="left" delay={{ show: 250, hide: 400 }} overlay={renderTooltip("Education")}>
                                                <span class="material-icons profile_icon">school</span>
                                            </OverlayTrigger>
                                            
                                            Bachelor of Computer Science & Engineering<br/>
                                            <span className="profile_school">at Hansie University, South Korea</span>
                                        </p>
                                    </Col>
                                </Row>
                                <Row className="profile_blank"></Row>
                                <Row>
                                    <Col>
                                        <p>
                                            <OverlayTrigger placement="left" delay={{ show: 250, hide: 400 }} overlay={renderTooltip("Email")}>
                                                <img className='profile_image_icon' src={gmail} alt="Gmail-icon" />
                                            </OverlayTrigger>
                                            
                                            baehw93@gmail.com
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p>
                                            <OverlayTrigger placement="left" delay={{ show: 250, hide: 400 }} overlay={renderTooltip("LinkedIn")}>
                                                <img className='profile_image_icon' src={linkedin} alt="Linkedin-icon" />
                                            </OverlayTrigger>
                                            
                                            https://www.linkedin.com/in/hyewon-bae-615392197
                                            <a href="https://www.linkedin.com/in/hyewon-bae-615392197" className="btn btn-link profile_link" target="_blank" rel='noreferrer'>
                                                <span class="material-icons">open_in_new</span>
                                            </a>
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p>
                                            <OverlayTrigger placement="left" delay={{ show: 250, hide: 400 }} overlay={renderTooltip("GitHub")}>
                                                <img className='profile_image_icon' src={github} alt="Github-icon" />
                                            </OverlayTrigger>
                                            
                                            https://github.com/hyewon93
                                            <a href="https://github.com/hyewon93" className="btn btn-link profile_link" target="_blank" rel='noreferrer'>
                                                <span class="material-icons">open_in_new</span>
                                            </a>
                                        </p>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Profile;