import { useEffect, useRef, useState } from "react";
import { Badge, Card, Col, Container, Pagination, Row } from "react-bootstrap";

import "../css/portfolio.css";

import { project_ecommerce, project_mchnUI, project_mchn_pay, project_payment_intent, project_report_auto, project_2fa } from "./ProjectData";

const project_icon_format = (icon, desc, url) => {
    return(
        <>
        <span className="material-icons project_icon">{icon}</span>
        {desc}
        <a href={url} className="btn btn-link profile_link" target="_blank" rel='noreferrer'>
            <span className="material-icons">open_in_new</span>
        </a>
        </>
    )
}

const project_image_format = (imgsrc, imgalt, desc, url) => {
    return(
        <>
        <img className='profile_image_icon' src={imgsrc} alt={imgalt} />
        {desc}
        <a href={url} className="btn btn-link profile_link" target="_blank" rel='noreferrer'>
            <span className="material-icons">open_in_new</span>
        </a>
        </>
    )
}

const ProjectDetail = ({type, id}) => {

    const projectPages = useRef([]);
    const projectImages= useRef([]);
    const projectImageDescs= useRef([]);

    const [currentProject, setProject] = useState(project_ecommerce);
    const [currentPage, setPage] = useState(1);
    const [currentImages, setImages] = useState([]);
    const [totalPage, setTotalPage] = useState(1);

    useEffect( () => {

        if(type === "MPM") {
            switch(id) {
                case 0:
                    setProject(project_ecommerce);
                    setTotalPage(project_ecommerce.images.length);
                    break;
                case 1:
                    setProject(project_mchnUI);
                    setTotalPage(project_mchnUI.images.length);
                    break;
                case 2:
                    setProject(project_mchn_pay);
                    setTotalPage(project_mchn_pay.images.length);
                    break;
                case 3:
                    setProject(project_payment_intent);
                    setTotalPage(project_payment_intent.images.length);
                    break;
                case 4:
                    setProject(project_report_auto);
                    setTotalPage(project_report_auto.images.length);
                    break;
                case 5:
                    setProject(project_2fa);
                    setTotalPage(project_2fa.images.length);
                    break;
                default:
                    break;
            }
        } else {

        }

    }, [type, id]);

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
        for (let number = 1; number <= totalPage; number++) {
            images.push(
                <Pagination.Item ref={el => projectPages.current[number-1] = el} key={number} active={number === currentPage} onClick={() => handlePage(number-1)}>
                {number}
                </Pagination.Item>,
            );
        }

        setImages(images);

    }, [currentPage, totalPage]);

    return (
        <Container className="project_container">
            <Row>
                <Col>
                    <Container>
                        <Row className="project_image_container">
                            <Card>
                                {currentProject.images.map((image, idx) => {
                                    return <Card.Img className={idx === 0 ? "project_image active" : "project_image"} ref={el => projectImages.current[idx] = el} src={image.src} variant="top" alt={image.alt} key={image.alt}/>
                                })}
                                <Card.Body>
                                    {currentProject.images.map((image, idx) => {
                                        return (
                                            <Container className={idx === 0 ? "project_image_desc active" : "project_image_desc"} ref={el => projectImageDescs.current[idx] = el} key={image.src}>
                                                {image.descriptions.map((description) => {

                                                    let imageDesc = "";

                                                    if(description.type === "icon") {
                                                        imageDesc = (
                                                            <Row key={description.desc}>
                                                                <Col>{project_icon_format(description.icon, description.desc, description.url)}</Col>
                                                            </Row>
                                                        )
                                                    } else if(description.type === "image") {
                                                        imageDesc = (
                                                            <Row key={description.desc}>
                                                                <Col>{project_image_format(description.imgsrc, description.imgalt, description.desc, description.url)}</Col>
                                                            </Row>
                                                        )
                                                    } else if(description.type === "text") {
                                                        imageDesc = (
                                                            <Row key={description.key}>
                                                                <Col>{description.desc}</Col>
                                                            </Row>
                                                        )
                                                    }

                                                    return imageDesc;
                                                })}
                                            </Container>
                                        )
                                    })}
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
                                {currentProject.badges.map((badge) => {
                                    return <Badge className="project_badge" bg={badge.bg} key={badge.text}>{badge.text}</Badge>
                                })}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h5>Goal</h5>
                                <p>{currentProject.goal}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h5>Key</h5>
                                <ul>
                                    {currentProject.keys.map((key) => {
                                        return (
                                            <li className="project_key" key={key.title}>
                                                <b>{key.title}</b> <br/>
                                                {key.desc}
                                            </li>
                                        )
                                    })}
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