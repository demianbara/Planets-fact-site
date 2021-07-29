import * as React from "react";

export const Web = ({imgType, planetData}) => {
    return (imgType === "geology" ? (
        <div className="main-planet-img">
            <img className="planet" src={planetData.images["planet"]} />
            <img className="geology" src={planetData.images[imgType]} />
        </div>
    ) : (
        <div className="main-planet-img">
            <img src={planetData.images[imgType]} />
        </div>
    )
    )
};

export const Mobile = ({ imgType, planetData }) => {
    return imgType === "geology" ? (
        <div className="main-planet-img-mobile">
            <img className="planet" src={planetData.images["planet"]} />
        </div>
    ) : (
        <div className="main-planet-img-mobile">
            <img src={planetData.images[imgType]} />
        </div>
    );
};


const PlanetSvg = {
    Web,
    Mobile
}

export default PlanetSvg