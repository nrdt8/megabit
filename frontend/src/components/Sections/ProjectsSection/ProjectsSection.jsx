import { useSite } from "../../../context/SiteContext";
import SectionHeader from "../../SectionHeader/SectionHeader";
import ProjectCard from "./ProjectsCard/ProjectCard";
import "./ProjectsSection.css";

const API_IMG_URL = import.meta.env.VITE_IMG_API_URL;

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
            img={`${API_IMG_URL}${elem.img}`}
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
