import "./styles.css";
import { Searcher } from "../Searcher/Searcher"
import { CharacterCard } from "../CharacterCard/CharacterCard";


export const BodyContent = ({ dataCharacter }) => {
    return (
        <div className="content">
            <Searcher dataCharacter={dataCharacter} />
            <div className="characterCardList">
                {dataCharacter.map((characterInfo) => (
                    <CharacterCard characterInfo={characterInfo} key={characterInfo.id} />
                ))}
            </div>
        </div>
    );
}