
import "./styles.css";
import { GoSearch } from "react-icons/go";

export const Searcher = ({ dataCharacter }) => {
    return (
        <div className="searcherBar">
            <div className="searcherBarContent">
                <GoSearch />
                <input placeholder="SEARCH A CHARACTER..." className="searcherBarText"></input>
            </div>
            <p className="searcherBarResults">{dataCharacter.length} RESULTS</p>
        </div>
    );

}

