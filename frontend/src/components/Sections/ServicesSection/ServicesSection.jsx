import { useSite } from "../../../context/SiteContext";
import "./ServicesSection.css";
import SectionHeader from "../../SectionHeader/SectionHeader";
import ServicesCard from "./ServicesCard/ServicesCard";

const ServicesSection = ({ showButton }) => {
  const { servicesHeader, services } = useSite();

  if (!servicesHeader || !services) return null;

  return (
    <section className="services section">
      <SectionHeader
        title={servicesHeader.title}
        description={servicesHeader.description}
      />
      <div className="services-cards">
        {services.map((elem) => (
          <ServicesCard
            key={elem.id}
            img={elem.img}
            title={elem.title}
            description={elem.description}
            showButton={showButton}
          ></ServicesCard>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
