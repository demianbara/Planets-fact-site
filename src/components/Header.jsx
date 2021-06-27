import * as React from 'react';

export default function Header () {

    return (
        <header>
            <div className="header-child1">
                <h2>THE PLANETS</h2>
            </div>
            <div className="header-child2">
                <button className="btn-mercury">MERCURY</button>
                <button className="btn-venus">VENUS</button>
                <button className="btn-earth">EARTH</button>
                <button className="btn-mars">MARS</button>
                <button className="btn-jupiter">JUPITER</button>
                <button className="btn-saturn">SATURN</button>
                <button className="btn-uranus">URANUS</button>
                <button className="btn-neptune">NEPTUNE</button>
            </div>
        </header>
    );
}
