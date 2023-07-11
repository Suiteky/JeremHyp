/* eslint-disable import/no-extraneous-dependencies */
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo" />
      <Link to="/">
        <div className="onglets">ACCEUIL</div>
      </Link>
      <Link to="/tarifs">
        <div className="onglets">TARIFS ET PRESTATIONS</div>
      </Link>
      <Link to="/horaire">
        <div className="onglets">HORAIRES</div>
      </Link>
    </header>
  );
}
