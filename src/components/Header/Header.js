
import "./styles.css";
import logo from '../../assets/marvel-logo.png';
import heartSelected from "../../assets/state-default.png"

export const Header = () => {

    return (
        < div className="headerBar">
            <a href="#">
                <img src={logo} className="marvel-logo" alt="marvel logo" />
            </a>
            <div className="favContainer">
                <div className="headerHeartFavContainer">
                    <img src={heartSelected} className="headerHeartFav" alt="favourites" />
                </div>
                <p className="favNumber">3</p>
            </div>
        </div>
    );

}

