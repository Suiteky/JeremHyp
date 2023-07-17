import tel from "../assets/tel.png";
import mail from "../assets/mail.jpg";

export default function Footer() {
  const onclickFB = () => {};

  return (
    <footer className="footer">
      <div className="telgrp">
        <img src={tel} alt="tel" className="tel" />
        <div className="num">06.22.35.65.58</div>
      </div>
      <div className="mailgrp">
        <img src={mail} alt="mail" className="email" />
        <div className="mail">pasinijeremy@hypnose.com</div>
      </div>
      <div className="reseau">
        <div className="fb">F</div>
        <button type="button" onClick={onclickFB} className="faceb">
          f
        </button>
      </div>
    </footer>
  );
}
