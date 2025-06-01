import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  // Add `githubUrl` and `videoUrl` for each project
  const projectsFull = [
    {
      title: "SKILL BRIDGE",
      description: "E-Learning Platform",
      imgUrl: projImg1,
      githubUrl: "https://github.com/anvesh-singh/36-ka-akda",
      videoUrl:
        "https://drive.google.com/file/d/1xJAKGlij6bPY7EeGWsscXCE8PAzo190G/view?usp=sharing",
    },
    {
      title: "MNNIT VOYAGE",
      description: "Gaming Platform",
      imgUrl: projImg2,
      githubUrl: "https://github.com/abbasiiqra/MNNIT-voyage",
      videoUrl: "https://www.youtube.com/embed/abcd1234", // or a local mp4 path
    },
    {
      title: "HEALING HAND",
      description: "Medical Website",
      imgUrl: projImg3,
      githubUrl: "https://github.com/yourusername/healing-hand",
      videoUrl: "/videos/healing-hand-demo.mp4",
    },

    // …add more projects as needed
  ];
  const projectsB = [
    {
      title: "COURSE SPILL",
      description: "Course Selling Website",
      imgUrl: projImg3,
      githubUrl: "https://github.com/abbasiiqra/course-selling",
      videoUrl: "/videos/healing-hand-demo.mp4",
    },
    // …add more projects as needed
  ];
  const projectsFront = [
    {
      title: "MEET ME SOON",
      description:
        "Dating Website Landing Page, Build during the internship,Hinge Clone",
      imgUrl: projImg4,
      githubUrl: "https://github.com/abbasiiqra/MMS",
      videoUrl:
        "https://drive.google.com/file/d/1KVBwyy1L0oCo7SqSYbMJ1WISOlgBmg7I/view?usp=drive_link",
    },
    // …add more projects as needed
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <br />
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Full Stack</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Backend</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Frontend</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projectsFull.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        {/* Replace with your backend‐only projects or a message */}
                        <Row>
                          {projectsB.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projectsFront.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
};
