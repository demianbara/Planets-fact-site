import * as React from "react";
import PlanetDescription from "./PlanetDescription";
import PlanetFeatures from "./PlanetFeatures";
import PlanetSvg from "./PlanetSvg";

export const Main = ({ planetData, imgType, setImgType, option, setOption }) => {
    return (
        <main>
            <div className="main-content-row1">
                <PlanetSvg.Web imgType={imgType} planetData={planetData} />
                <PlanetDescription
                    planetData={planetData}
                    setImgType={setImgType}
                    option={option}
                    setOption={setOption}
                    imgType={imgType}
                />
            </div>
            <PlanetFeatures planetData={planetData} />
        </main>
    );
};

export const MenuMobileOn = ({ handleClick }) => {
    return (
        <main>
            <div className="content-mobile">
                <div>
                    <button onClick={handleClick} className="btn-mercury">
                        MERCURY
                    </button>
                </div>
                <div></div>
                <button onClick={handleClick} className="btn-venus">
                    VENUS
                </button>
                <div>

                <button onClick={handleClick} className="btn-earth">
                    EARTH
                </button>
                </div>
                <div>
                <button onClick={handleClick} className="btn-mars">
                    MARS
                </button>
                </div>
                    
                <div></div>
                <button onClick={handleClick} className="btn-jupiter">
                    JUPITER
                </button>
                <div></div>
                <button onClick={handleClick} className="btn-saturn">
                    SATURN
                </button>
                <div></div>
                <button onClick={handleClick} className="btn-uranus">
                    URANUS
                </button>
                <div></div>
                <button onClick={handleClick} className="btn-neptune">
                    NEPTUNE
                </button>
            </div>
        </main>
    );
};

const Content = {
    Main,
    MenuMobileOn,
};

export default Content;
