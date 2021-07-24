import * as React from "react";
import PlanetDescription from "./PlanetDescription";

export default function Content({planetData}) {
    const [imgType, setImgType] = React.useState('planet')
    console.log(imgType)
    return (
        <main>
            <div className="main-content-row1">
                <div className="main-planet-img">
                    <img src={planetData.images[imgType]} />
                </div>
                <PlanetDescription planetData={planetData} setImgType={setImgType}/>
            </div>
            <div className="main-content-row2">
                <div className="rotation-time">
                    <p>ROTATION TIME</p>
                    <h2>{planetData.rotation.toUpperCase()}</h2>
                </div>
                <div className="revolution-radius">
                    <p>REVOLUTION TIME</p>
                    <h2>{planetData.revolution.toUpperCase()}</h2>
                </div>
                <div className="revolution-radius">
                    <p>RADIUS</p>
                    <h2>{planetData.radius}</h2>
                </div>
                <div className="average-temp">
                    <p>AVERAGE TEMP.</p>
                    <h2>{planetData.temperature.toUpperCase()}</h2>
                </div>
            </div>
        </main>
    );
}
