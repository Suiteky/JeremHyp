import tel from "../assets/tel.png";
import mail from "../assets/mail.jpg";
import fb from "../assets/fb.png";
import insta from "../assets/insta.png";

export default function Footer() {
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
        <img src={fb} alt="fb" className="fb" />
        <img src={insta} alt="insta" className="insta" />
      </div>
    </footer>
  );
}
