import CallbackInput from "./CallbackInput/CallbackInput";
import Button from "../../Button/Button";
import "./CallbackSection.css";
import { useState } from "react";
import { useSite } from "../../../context/SiteContext";
import emailjs from "emailjs-com";

const CallbackSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const sendForm = (event) => {
    event.preventDefault();

    const templateParams = {
      name: name,
      phone: phone,
    };

    emailjs
      .send(
        "service_r6du155",
        "template_bpwtsw2",
        templateParams,
        "vCCpHg19RrHw5uM1F",
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Заявка отправлена!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Ошибка отправки");
        },
      );
  };

  const { callback } = useSite();

  if (!callback) return null;

  return (
    <section className="callback section">
      <div className="callback-container">
        <div className="callback_img">
          <img src={callback.img} alt="" />
        </div>
        <div className="callback_content">
          <div className="callback_content-title">Обратный звонок</div>
          <div className="callback_content-description">
            Перезвоним в течение 10 минут.
          </div>

          <form onSubmit={sendForm}>
            <CallbackInput
              className="callback_content-input"
              type="text"
              ID="name"
              label="Имя"
              value={name}
              setValue={setName}
            />

            <CallbackInput
              className="callback_content-input"
              type="tel"
              ID="phone"
              label="Телефон"
              value={phone}
              setValue={setPhone}
            />

            <Button
              hoverTextColor="var(--color-blue-1)"
              hoverBorderColor="var(--color-blue-1)"
              className="callback_content-button"
              type="submit"
            >
              Связаться с нами
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CallbackSection;
