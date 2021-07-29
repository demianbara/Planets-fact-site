import * as React from "react";
import { ReactComponent as ReactArrow } from "../assets/external-link-square-alt-solid.svg";
import planetColor from "../utils/planetColor";
import PlanetSvg from "./PlanetSvg";

export default function PlanetDescription({
    imgType,
    planetData,
    setImgType,
    option,
    setOption,
}) {
    const handleClick = (e) => {
        const { value, name } = e.target;
        if (!value || !name) console.error("value missing, please click again");
        setOption(value ? value : "overview");
        setImgType(name ? name : "planet");
    };

    let hexa = planetColor(planetData.name.toLowerCase());

    console.log("Option", option);

    return (
        <div className="main-planet-description">
            <div className="overview-mobile">
                <h1>{planetData.name.toUpperCase()}</h1>
                <p className="overview-content">{planetData[option].content}</p>
                <p className="overview-source">
                    Source: <a href={planetData[option].source}>Wikipedia</a>
                    <i class="fas fa-external-link-square-alt"></i>
                    <ReactArrow className="react-arrow" />
                </p>
            </div>
            <PlanetSvg.Mobile imgType={imgType} planetData={planetData} />
            <div className="buttons-planet-unique">
                {/* botones web */}
                <button
                    style={{
                        backgroundColor: option === "overview" ? hexa : null,
                    }}
                    onClick={handleClick}
                    name="planet"
                    value="overview"
                    className="description-button-laptop"
                >
                    <span className="buttons-numbers">01</span>
                    OVERVIEW
                </button>
                <button
                    style={{
                        backgroundColor: option === "structure" ? hexa : null,
                    }}
                    onClick={handleClick}
                    name="internal"
                    value="structure"
                    className="description-button-laptop"
                >
                    <span className="buttons-numbers">02</span>
                    <span>INTERNAL</span> STRUCTURE
                </button>
                <button
                    style={{
                        backgroundColor: option === "geology" ? hexa : null,
                    }}
                    onClick={handleClick}
                    name="geology"
                    value="geology"
                    className="description-button-laptop"
                >
                    <span className="buttons-numbers">03</span>
                    <span>SURFACE</span> GEOLOGY
                </button>
                {/* //botones movile */}
                <button
                    style={{
                        borderBottom:
                            option === "overview" ? `5px solid ${hexa}` : null,
                        color: option === "overview" ? `#ffffff` : null,
                        backgroundColor: "transparent",
                    }}
                    onClick={handleClick}
                    name="planet"
                    value="overview"
                    className="description-button-movile"
                >
                    OVERVIEW
                </button>
                <button
                    style={{
                        borderBottom:
                            option === "structure" ? `5px solid ${hexa}` : null,
                        color: option === "structure" ? `#ffffff` : null,
                        backgroundColor: "transparent",
                    }}
                    onClick={handleClick}
                    name="internal"
                    value="structure"
                    className="description-button-movile"
                >
                    STRUCTURE
                </button>
                <button
                    style={{
                        borderBottom:
                            option === "geology" ? `5px solid ${hexa}` : null,
                        color: option === "geology" ? `#ffffff` : null,
                        backgroundColor: "transparent",
                    }}
                    onClick={handleClick}
                    name="geology"
                    value="geology"
                    className="description-button-movile"
                >
                    SURFACE
                </button>
            </div>
        </div>
    );
}
