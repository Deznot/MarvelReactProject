import "./charAbout.scss";
import char from "../../resources/img/thor.jpeg";

const CharAbout = () => {

    return (
        <div className="charAbout">
            <img src={char} alt="character avatar" className="charAbout__img" />
            <div className="charAbout__info">
                <div className="charAbout__name">LOKI</div>
                <p className="charAbout__descr">
                    In Norse mythology, Loki is a god or jötunn (or both). 
                    Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. 
                    By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr.
                    By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, 
                    Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. 
                    In addition, Loki is referred to as the father of Váli in the Prose Edda.
                </p>
            </div>
            
        </div>
    );
}

export default CharAbout;