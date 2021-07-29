import * as React from "react";

export const Web = ({ handleClick, setMenu }) => {
    return (
        <div className="header-child2">
            <button onClick={handleClick} className="btn-mercury">
                MERCURY
            </button>
            <button onClick={handleClick} className="btn-venus">
                VENUS
            </button>
            <button onClick={handleClick} className="btn-earth">
                EARTH
            </button>
            <button onClick={handleClick} className="btn-mars">
                MARS
            </button>
            <button onClick={handleClick} className="btn-jupiter">
                JUPITER
            </button>
            <button onClick={handleClick} className="btn-saturn">
                SATURN
            </button>
            <button onClick={handleClick} className="btn-uranus">
                URANUS
            </button>
            <button onClick={handleClick} className="btn-neptune">
                NEPTUNE
            </button>
        </div>
    );
};

export const Mobile = ({ handleMenuState }) => {
    return (
        <div className="header-child2-mobile">
            <button onClick={handleMenuState}>
                <svg viewBox="0 0 100 80" width="40" height="40" color="white">
                    <rect width="100" height="15"></rect>
                    <rect y="30" width="100" height="15"></rect>
                    <rect y="60" width="100" height="15"></rect>
                </svg>
            </button>
        </div>
    );
};

const HeaderButton = {
    Web,
    Mobile,
};

export default HeaderButton;
