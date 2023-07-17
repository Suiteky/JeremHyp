import Footer from "./Footer";
import Header from "./Header";

export default function Tarifs() {
  return (
    <>
      <Header />
      <div className="tp">
        <h1>Prestations :</h1>
        <h2>Méthodes de travail :</h2>
        <p className="mdt">
          Ancrage: mouvement physique (geste) permettant de retrouver un état ou
          des sensations misent en place au cour d’une séance. <br /> <br />
          <br />
          Hypnose Ericksonienne: Méthode de travail pour mettre un sujet sous
          hypnose basé sur les travaux de Milton Erickson. <br /> <br /> <br />
          Hypnose directe
        </p>
        <h2>Services :</h2>
        <p>
          Gestion des addictions aide au sevrage tabagique gestion de la douleur
          gestion du stress gestion des émotions gestion des phobies
        </p>
        <div className="tarif">
          Les séances se déroulent sur une heure pour un prix de 80€ ou 50€ sur
          présentation d’une carte etudiant (moins de 25 ans)
        </div>
      </div>
      <Footer />
    </>
  );
}
