import Footer from "./Footer";
import Header from "./Header";
import diplome from "../assets/diplome.jpg";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <div className="acceuil">
        <div className="paragraphe">
          <div className="u">U</div>
          <div className="texte">
            n mot pour commencer... <br />
            Certifié par la NGH depuis 2022 suite à ma formation en hypnose à
            l’I-HEC. J'ai le plaisir de vous recevoir à Bordeaux, à deux minutes
            de l’arrêt Stalingrad, pour vous aider dans vos démarches visant à
            améliorer votre vie. Si vous souhaitez mieux gérer votre stress,
            soulager une addiction, ou simplement vous sentir mieux, alors
            l’hypnose est faite pour vous.
          </div>
        </div>
        <img src={diplome} alt="diplome" className="diplome" />
      </div>
      <Footer />
    </div>
  );
}
