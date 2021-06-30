import * as React from "react";
import Header from "./Header";
import Content from "./Content";
import { ReactComponent as ReactStars } from "../assets/background-stars.svg";

export default function App() {
    return (
        <div>
            <Header />
            <Content />
        </div>
    );
}
