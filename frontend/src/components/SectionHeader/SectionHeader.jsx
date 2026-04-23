import "./SectionHeader.css";

const SectionHeader = ({ title, description }) => {
  return (
    <div className="section-header">
      <div className="section-header_title">{title}</div>
      <div className="section-header_description">{description}</div>
    </div>
  );
};

export default SectionHeader;
