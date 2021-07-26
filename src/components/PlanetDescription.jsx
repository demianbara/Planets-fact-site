import * as React from "react";
import { ReactComponent as ReactArrow } from "../assets/external-link-square-alt-solid.svg";
import planetColor from "../utils/planetColor";



export default function PlanetDescription({ planetData, setImgType, option, setOption }) {
    // const [option, setOption] = React.useState("overview");
    console.log(planetData)
    const handleClick = (e) => {
        const {value, name} = e.target;
        setOption(value);
        setImgType(name);
    };

    let hexa = planetColor(planetData.name.toLowerCase())

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
                <button
                    style={{
                        backgroundColor: option === "overview" ? hexa : null,
                    }}
                    onClick={handleClick}
                    name="planet"
                    value="overview"
                >
                    <span>01</span>
                    OVERVIEW
                </button>
                <button
                    style={{
                        backgroundColor: option === "structure" ? hexa : null,
                    }}
                    onClick={handleClick}
                    name="internal"
                    value="structure"
                >
                    <span>02</span>INTERNAL STRUCTURE
                </button>
                <button
                    style={{
                        backgroundColor: option === "geology" ? hexa : null,
                    }}
                    onClick={handleClick}
                    name="geology"
                    value="geology"
                >
                    <span>03</span>SURFACE GEOLOGY
                </button>
            </div>
        </div>
    );
}
