import Footer from "./Footer";
import Header from "./Header";

export default function Horaire() {
  return (
    <>
      <Header />
      <div className="horaire">
        <ul>
          <li>Lundi 10h00 - 18h00</li>
          <li>Mardi 10h00 - 18h00</li> <li>Mercredi 10h00 - 18h00</li>
          <li>Jeudi 10h00 - 18h00</li> <li>Vendredi 10h00 - 18h00</li>
          <li>Samedi Fermé</li> <li>Dimanche Fermé</li>
        </ul>
        <img src="" alt="" />
      </div>
      <Footer />
    </>
  );
}
