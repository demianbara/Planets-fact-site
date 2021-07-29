import * as React from "react";
import HeaderButton from "./HeaderButton";

export default function Header({ handleClick, handleMenuState }) {
    return (
        <header>
            <div className="header-child1">
                <h2>THE PLANETS</h2>
            </div>
            <HeaderButton.Web handleClick={handleClick} />
            <HeaderButton.Mobile handleMenuState={handleMenuState} />
        </header>
    );
}
