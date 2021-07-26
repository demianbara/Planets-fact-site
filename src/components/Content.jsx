import * as React from "react";
import PlanetDescription from "./PlanetDescription";
import PlanetFeatures from "./PlanetFeatures";
import PlanetSvg from "./PlanetSvg";

export default function Content({
    planetData,
    imgType,
    setImgType,
    option,
    setOption,
}) {
    return (
        <main>
            <div className="main-content-row1">
                <PlanetSvg imgType={imgType} planetData={planetData} />
                <PlanetDescription
                    planetData={planetData}
                    setImgType={setImgType}
                    option={option}
                    setOption={setOption}
                />
            </div>
            <PlanetFeatures planetData={planetData} />
        </main>
    );
}
