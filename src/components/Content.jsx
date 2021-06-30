import * as React from "react";
import PlanetDescription from "./PlanetDescription";
import { ReactComponent as ReactMercury } from "../assets/planet-mercury.svg";
import json from "../assets/data.json";

const [Mercury] = json;

export default function Content() {
    return (
        <main>
            <div className="main-content-row1">
                <div className="main-planet-img">
                    <ReactMercury />
                </div>
                <PlanetDescription />
            </div>
            <div className="main-content-row2">
                <div className='rotation-time'>
                    <p>ROTATION TIME</p>
                    <h2>{Mercury.rotation.toUpperCase()}</h2>
                </div>
                <div className='revolution-radius'>
                    <p>REVOLUTION TIME</p>
                    <h2>{Mercury.revolution.toUpperCase()}</h2>
                </div>
                <div className='revolution-radius'>
                    <p>RADIUS</p>
                    <h2>{Mercury.radius}</h2>
                </div>
                <div className='average-temp'>
                    <p>AVERAGE TEMP.</p>
                    <h2>{Mercury.temperature.toUpperCase()}</h2>
                </div>
            </div>
        </main>
    );
}
