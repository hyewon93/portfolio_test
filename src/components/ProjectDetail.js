import { Badge, Card, Col, Container, Pagination, Row } from "react-bootstrap";

import "../css/portfolio.css";

import finale_logo from "../images/career/finale_logo.jpg";
import recharge_logo from "../images/career/recharge_logo.png";
import github from '../images/profile/GitHub-icon.png';

import { useEffect, useRef, useState } from "react";

const ProjectDetail = ({type, id}) => {

    const projectPages = useRef([]);
    const projectImages= useRef([]);
    const projectImageDescs= useRef([]);

    const [currentPage, setPage] = useState(1);
    const [currentImages, setImages] = useState([]);

    useEffect( () => {

        const handlePage = (idx) => {

            if(currentPage !== (idx + 1)) {
                for(let i=0; i<projectPages.current.length; i++) {
                    projectPages.current[i].classList.remove("active");
                }
        
                setPage(idx + 1);
                projectPages.current[idx].classList.add("active");

                for(let i=0; i<projectImages.current.length; i++) {
                    projectImages.current[i].classList.remove("active");
                }
                projectImages.current[idx].classList.add("active");

                for(let i=0; i<projectImageDescs.current.length; i++) {
                    projectImageDescs.current[i].classList.remove("active");
                }
                projectImageDescs.current[idx].classList.add("active");

            }
        }

        let images = [];
        for (let number = 1; number <= 2; number++) {
            images.push(
                <Pagination.Item ref={el => projectPages.current[number-1] = el} key={number} active={number === currentPage} onClick={() => handlePage(number-1)}>
                {number}
                </Pagination.Item>,
            );
        }

        setImages(images);

    }, [currentPage]);

    return (
        <Container className="project_container">
            <Row>
                <Col>
                    <Container>
                        <Row className="project_image_container">
                            <Card>
                                <Card.Img className="project_image active" ref={el => projectImages.current[0] = el} src={finale_logo} variant="top" alt="finale_logo"/>
                                <Card.Img className="project_image" ref={el => projectImages.current[1] = el} src={recharge_logo} variant="top" alt="finale_logo"/>
                                <Card.Body>
                                    <Card.Text>
                                        <Container className="project_image_desc active" ref={el => projectImageDescs.current[0] = el}>
                                            <Row>
                                                <Col>
                                                    <span class="material-icons project_icon">description</span>
                                                    API Documentation
                                                    <a href="https://support.finaleinventory.com/hc/en-us/categories/115001160947-API-Documentation" className="btn btn-link profile_link" target="_blank" rel='noreferrer'>
                                                        <span className="material-icons">open_in_new</span>
                                                    </a>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <img className='profile_image_icon' src={github} alt="Github-icon" />
                                                    Github Code
                                                    <a href="https://github.com/hyewon93/PHP/tree/master/Finale-Inventory-Integration" className="btn btn-link profile_link" target="_blank" rel='noreferrer'>
                                                        <span className="material-icons">open_in_new</span>
                                                    </a>
                                                </Col>
                                            </Row>
                                        </Container>
                                        <Container className="project_image_desc" ref={el => projectImageDescs.current[1] = el}>
                                            <Row>
                                                <Col>
                                                    <span class="material-icons project_icon">description</span>
                                                    API Documentation
                                                    <a href="https://developer.rechargepayments.com/2021-11" className="btn btn-link profile_link" target="_blank" rel='noreferrer'>
                                                        <span className="material-icons">open_in_new</span>
                                                    </a>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <img className='profile_image_icon' src={github} alt="Github-icon" />
                                                    Github Code
                                                    <a href="https://github.com/hyewon93/PHP/tree/master/Recharge-Integration" className="btn btn-link profile_link" target="_blank" rel='noreferrer'>
                                                        <span className="material-icons">open_in_new</span>
                                                    </a>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Row>
                        <Row className="project_page_container">
                            <Col>
                                <Pagination className="project_page" size="sm">{currentImages}</Pagination>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col>
                    <Container>
                        <Row>
                            <Col>
                                <Badge className="project_badge" bg="primary">PHP</Badge>
                                <Badge className="project_badge" bg="info">REST API</Badge>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h5>Goal</h5>
                                <p>Develop integrations between third-party ecommerce services and APIs with our application (the MCHN).</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h5>Key</h5>
                                <ul>
                                    <li className="project_key">
                                        <b>Real-time inventory</b> <br/>
                                        Finale Inventory is a cloud-based, multichannel inventory management software. 
                                        I made a new site service and a new cron file to get inventory data from Finale Inventory 
                                        so that MCHN users can do all management as well as inventory management in MCHN. 
                                    </li>
                                    <li className="project_key">
                                        <b>Subscription Migration</b> <br/>
                                        For users who used other eCommerce platforms, I had to migrate their existing subscriptions to MCHN. 
                                        MCHN needed a new site service setting for ReCharge and a new script for subscription migrating.
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default ProjectDetail;