import { Col, Container, Row } from 'react-bootstrap';
import '../css/portfolio.css';

import skills_frontend from '../images/skills/frontend.png';
import skills_backend from '../images/skills/backend.png';
import skills_versionControl from '../images/skills/versionControl.png';
import skills_communication from '../images/skills/communication.png';

const Skills = () => {
    return (
        <div className="home_container layout_skills">
            <div className="section_title">
                SKILLS
            </div>
            <div className="section_container">
                <Container>
                    <Row>
                        <Col>
                            <div className="card border-secondary mb-3 section_card">
                                <div className="section_card-header">Frontend</div>
                                <div className="card-body">
                                    <img className="skills_image" src={skills_frontend} alt="skills_frontend"/>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="card border-secondary mb-3 section_card">
                                <div className="section_card-header">Backend</div>
                                <div className="card-body">
                                    <img className="skills_image" src={skills_backend} alt="skills_backend"/>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <Container>
                                <Row>
                                    <Col>
                                    <div className="card border-secondary mb-3 section_card">
                                        <div className="section_card-header">Version Control</div>
                                        <div className="card-body">
                                            <img className="skills_image" src={skills_versionControl} alt="skills_versionControl"/>
                                        </div>
                                    </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                    <div className="card border-secondary mb-3 section_card">
                                        <div className="section_card-header">Communication</div>
                                        <div className="card-body">
                                            <img className="skills_image" src={skills_communication} alt="skills_communication"/>
                                        </div>
                                    </div>
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

export default Skills;