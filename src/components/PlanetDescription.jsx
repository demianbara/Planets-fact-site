import * as React from "react";
import { ReactComponent as ReactArrow } from "../assets/external-link-square-alt-solid.svg";


export default function PlanetDescription({ planetData, setImgType }) {
    const [option, setOption] = React.useState("overview");

    const handleClick = (e) => {
        setOption(e.target.value);
    };

    return (
        <div className="main-planet-description">
            <h1>{planetData.name.toUpperCase()}</h1>
            <p className="overview-content">{planetData[option].content}</p>
            <p className="overview-source">
                Source: <a href={planetData[option].source}>Wikipedia</a>
                <i class="fas fa-external-link-square-alt"></i>
                <ReactArrow className="react-arrow" />
            </p>
            <div className="buttons-planet-unique">
                <button onClick={handleClick} value="overview">
                    <span>01</span>
                    OVERVIEW
                </button>
                <button onClick={handleClick} value="structure">
                    <span>02</span>INTERNAL STRUCTURE
                </button>
                <button onClick={handleClick} value="geology">
                    <span>03</span>SURFACE GEOLOGY
                </button>
            </div>
        </div>
    );
}
