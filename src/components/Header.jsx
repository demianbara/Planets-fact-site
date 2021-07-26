import * as React from "react";

export default function Header({setPlanet, setImgType, setOption}) {

    const handleClick = (e) => {
        setPlanet(e.target.innerText.toLowerCase());
        setImgType('planet')
        setOption('overview')
    };

    return (
        <header>
            <div className="header-child1">
                <h2>THE PLANETS</h2>
            </div>
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
        </header>
    );
}
