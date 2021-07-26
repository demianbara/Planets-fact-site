import * as React from "react";
import Header from "./Header";
import Content from "./Content";
import json from "../assets/data.json";

export default function App() {
    const [planet, setPlanet] = React.useState("mercury");
    const [imgType, setImgType] = React.useState("planet");
    const [option, setOption] = React.useState("overview");

    let [planetData] = json.filter(p => p.name.toLowerCase() === planet)

    return (
        <div>
            <Header
                setPlanet={setPlanet}
                setImgType={setImgType}
                setOption={setOption}
            />
            <Content
                planetData={planetData}
                imgType={imgType}
                setImgType={setImgType}
                option={option}
                setOption={setOption}
            />
        </div>
    );
}
