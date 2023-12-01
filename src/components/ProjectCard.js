import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,projectlink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" >
        <img src={imgUrl} />
        <div className="proj-txtx">
          <a href={projectlink} target="_blank"><h4>{title}</h4></a>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
