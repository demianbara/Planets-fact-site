import * as React from "react";
import Header from "./Header";
import Content from "./Content";
import json from "../assets/data.json";

export default function App() {
    const [planet, setPlanet] = React.useState("mercury");
    let [planetData] = json.filter(p => p.name.toLowerCase() === planet)
    console.log(planetData);
    return (
        <div>
            <Header setPlanet={setPlanet} />
            <Content planetData={planetData} />
        </div>
    );
}
