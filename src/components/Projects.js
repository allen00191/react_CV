import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/gd1.png";
import projImg2 from "../assets/img/gd2.png";
import projImg3 from "../assets/img/gd7.png";
import projImg4 from "../assets/img/vd1.png";
import projImg5 from "../assets/img/vd2.png";
import projImg6 from "../assets/img/vd3.png";
import projImg7 from "../assets/img/wd1.png";
import projImg8 from "../assets/img/wd2.png";
import projImg9 from "../assets/img/wd3.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Graphic Design",
      description: "2020year Leadership For Tomorrow ",
      imgUrl: projImg1,
    },
    {
      title: "Graphic Design",
      description: "Into the summer ",
      imgUrl: projImg2,
    },
    {
      title: "Graphic Design",
      description: "Banner Design ",
      imgUrl: projImg3,
    },
    {
      title: "Video Editing",
      description: "Chinese New Year Video",
      imgUrl: projImg4,
    },
    {
      title: "Video Editing",
      description: "Singing Video",
      imgUrl: projImg5,
    },
    {
      title: "Video Editing",
      description: "Chinese New Year Live ",
      imgUrl: projImg6,
    },
    {
      title: "Web Design",
      description: "Happy day starts with good breakfast!",
      imgUrl: projImg7,
    },
    {
      title: "Web Design",
      description: "CV website Development",
      imgUrl: projImg8,
    },
    {
      title: "Web Design",
      description: "CV website Development",
      imgUrl: projImg9,
    },
  ];

  
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    
                      <Nav.Link eventKey="first">LATEST WORKS</Nav.Link>
                   
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    
          
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
