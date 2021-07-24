import * as React from "react";
import json from "../assets/data.json";
import { ReactComponent as ReactArrow } from "../assets/external-link-square-alt-solid.svg";

const [Mercury] = json;

export default function PlanetDescription() {
    return (
        <div className="main-planet-description">
            <h1>{Mercury.name.toUpperCase()}</h1>
            <p className="overview-content">{Mercury.overview.content}</p>
            <p className="overview-source">
                Source: <a href={Mercury.overview.source}>Wikipedia</a>
                <i class="fas fa-external-link-square-alt"></i>
                <ReactArrow className='react-arrow' />
            </p>
            <div className="buttons-planet-unique">
                <button>
                    <span>01</span>
                    OVERVIEW
                </button>
                <button>
                    <span>02</span>INTERNAL STRUCTURE
                </button>
                <button>
                    <span>03</span>SURFACE GEOLOGY
                </button>
            </div>
        </div>
    );
}
