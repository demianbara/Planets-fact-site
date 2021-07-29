import * as React from "react";
import Header from "./Header";
import Content from "./Content";
import json from "../assets/data.json";

export default function App() {
    const [planet, setPlanet] = React.useState("mercury");
    const [imgType, setImgType] = React.useState("planet");
    const [option, setOption] = React.useState("overview");
    const [menu, setMenu] = React.useState(false);


    const handleClick = (e) => {
        setPlanet(e.target.innerText.toLowerCase());
        setImgType("planet");
        setOption("overview");
    };

    const handleClickMobile = (e) => {
        setPlanet(e.target.innerText.toLowerCase());
        setImgType("planet");
        setOption("overview");
        handleMenuState()
    };

    const handleMenuState = () => {
        setMenu(!menu);
    };

    let [planetData] = json.filter((p) => p.name.toLowerCase() === planet);

    return (
        <div>
            <Header
                setPlanet={setPlanet}
                setImgType={setImgType}
                setOption={setOption}
                setMenu={setMenu}
                menu={menu}
                handleClick={handleClick}
                handleMenuState={handleMenuState}
            />
            {!menu ? (
                <Content.Main
                    planetData={planetData}
                    imgType={imgType}
                    setImgType={setImgType}
                    option={option}
                    setOption={setOption}
                />
            ) : (
                <Content.MenuMobileOn handleClick={handleClickMobile} />
            )}
        </div>
    );
}
