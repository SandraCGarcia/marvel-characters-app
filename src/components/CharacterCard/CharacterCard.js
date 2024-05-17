import heartUnselected from "../../assets/state-unselected.png";
import "./styles.css";

export const CharacterCard = ({ characterInfo }) => {
  return (
    <div className="characterCard">
      <div
        className="cardImage"
        style={{
          backgroundImage: `url(${characterInfo.thumbnail.path + "/portrait_xlarge.jpg"
            })`,
        }}
      ></div>

      <div className="cardInfoContaner">
        <p className="cardText">{characterInfo.name}</p>
        <div className="cardHeartDefContainer">
          <img
            src={heartUnselected}
            className="cardHeartDef"
            alt="heart unselected"
          />
        </div>
      </div>
    </div>
  );
};

