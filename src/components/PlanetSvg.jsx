import * as React from "react";

export default ({imgType, planetData}) => {
    return imgType === "geology" ? (
        <div className="main-planet-img">
            <img className="planet" src={planetData.images["planet"]} />
            <img className="geology" src={planetData.images[imgType]} />
        </div>
    ) : (
        <div className="main-planet-img">
            <img src={planetData.images[imgType]} />
        </div>
    );
};
