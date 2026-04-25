import { useSite } from "../../../context/SiteContext";
import SectionHeader from "../../SectionHeader/SectionHeader";
import ProjectCard from "./ProjectsCard/ProjectCard";
import "./ProjectsSection.css";

const ProjectsSection = ({ showButton }) => {
  const { project, projectHeader } = useSite();
  if (!project || !projectHeader) return null;

  return (
    <section className="projects section">
      <SectionHeader
        title={projectHeader.title}
        description={projectHeader.description}
      />
      <div className="projects-cards">
        {project.map((elem) => (
          <ProjectCard
            key={elem.id}
            img={elem.img}
            company={elem.company}
            object={elem.object}
            showButton={showButton}
          ></ProjectCard>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
