import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ProjectDetail from "./ProjectDetail";

const mpmProjectList = [
    { title:"3rd Party eCommerce Platform Integration" },
    { title:"MCHN UI V3" },
    { title:"MCHN Pay" },
    { title:"Stripe Payment Intent API" },
    { title:"Report Automation" },
    { title:"Two-Factor Authentication (2FA)" },
];

const ProjectModal = ({show, type, id, handleClose}) => {

    const [projectTitle, setProjectTitle] = useState("");

    useEffect(()=>{
        if(type === "MPM"){
            setProjectTitle(mpmProjectList[id].title);
        } else {
            setProjectTitle(mpmProjectList[id].title);
        }
    }, [type, id]);

    return (
        <div
          className="modal show"
          style={{ display: 'block', position: 'initial' }}
        >
            <Modal className="project_modal" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{projectTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ProjectDetail type={type} id={id} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ProjectModal;