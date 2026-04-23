import "./ContactInfo.css";

const ContactInfo = ({ children, icon }) => {
  return (
    <div className="contact-info">
      <img src={icon} alt="" />
      <span>{children}</span>
    </div>
  );
};

export default ContactInfo;
