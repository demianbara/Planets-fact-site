import * as React from "react";
import PlanetDescription from "./PlanetDescription";
import PlanetFeatures from "./PlanetFeatures";
import PlanetSvg from "./PlanetSvg";
import MenuButtonsMobile from "./MenuButtonsMobile";

export const Main = ({
    planetData,
    imgType,
    setImgType,
    option,
    setOption,
}) => {
    const handleClick = (e) => {
        const { value, name } = e.target;
        setOption(value ? value : "overview");
        setImgType(name ? name : "planet");
    };
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
                    handleClick={handleClick}
                />
            </div>
            <PlanetFeatures planetData={planetData} />
        </main>
    );
};

export const MenuMobileOn = ({ handleClick }) => {
    return (
        <main>
            <MenuButtonsMobile handleClick={handleClick} />
        </main>
    );
};

const Content = {
    Main,
    MenuMobileOn,
};

export default Content;
