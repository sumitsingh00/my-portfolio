import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/rent.png";
import projImg2 from "../assets/img/sentiment.png";
import projImg3 from "../assets/img/blog.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "digital Rental Tracking",
      description: "A complete website which track tracks the rental payments which maintain all the records Between tenants and flat/PG owners.",
      projectlink:"https://github.com/sumitsingh00/house-rental-management-system-",
      imgUrl: projImg1,
    },
    {
      title: "Sentiment Analysis",
      description: "It is machine learning Sentiment analysis modal which tries to uncover emotions in the texts, comments, feedback.",
      projectlink:"https://github.com/sumitsingh00/sentiment-analysis",
      imgUrl: projImg2,
    },
    {
      title: "flask-blogging-site",
      description: "This is a flask based blogging website whose frontend is created using bootstrap",
      projectlink:"https://github.com/sumitsingh00/flask-bloging-site",
      imgUrl: projImg3,
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg1,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <div> <h4>digital Rental Tracking</h4> 
                <h6>Bootstrap, JavaScript, NODE js, express js , html, CSS.</h6>
                • A complete website which track tracks the rental payments which maintain all the records Between tenants and flat/PG owners.
                <br></br>• This website will mainly help in tracking the tenants in many aspects be it in the terms of payments, feedbacks and regular notifications.
                <br></br>
                <br></br>
                
                <h4>Sentiment Analysis</h4> 
                <h6>Flask, Pandas, sklearn, Python, numpy, NLP, NLT, html, css , bootstrap.</h6>
                • It is machine learning Sentiment analysis modal which tries to uncover emotions in the texts, comments, feedback.
                <br></br>• The main aim of this project is to provide a proper overview and categorization of the reviews/comments into +ve , -ve and neutral aspect.
                <br></br>
                <br></br>

                <h4>flask-blogging-site </h4> 
                <h6>html, css, JavaScript, Flask, Python, bootstrap, MySQL.</h6>

                • This is a flask based blogging website whose frontend is created using bootstrap.
                <br></br>• Users can also create their own account by registering or by google authentication
                <br></br>
                <br></br>
              </div>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
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
                    {/* <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  )
}
