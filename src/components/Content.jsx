import * as React from "react";
import PlanetDescription from "./PlanetDescription";
import PlanetFeatures from "./PlanetFeatures";
import PlanetSvg from "./PlanetSvg";
import planetColor from "../utils/planetColor";
import { ReactComponent as ReactArrowRigth } from "../assets/right-arrow-svgrepo-com.svg";

export const Main = ({
    planetData,
    imgType,
    setImgType,
    option,
    setOption,
}) => {
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
                <button onClick={handleClick} className="btn-mercury">
                    <div>
                        <svg height="100" width="100">
                            <circle
                                cx="50"
                                cy="50"
                                r="15"
                                stroke="black"
                                stroke-width="3"
                                fill={planetColor("mercury")}
                            />
                        </svg>
                        <p>MERCURY</p>
                    </div>
                    <ReactArrowRigth />
                </button>

                <button onClick={handleClick} className="btn-venus">
                    <div>
                        <svg height="100" width="100">
                            <circle
                                cx="50"
                                cy="50"
                                r="15"
                                stroke="black"
                                stroke-width="3"
                                fill={planetColor("venus")}
                            />
                        </svg>
                    <p>VENUS</p>
                    </div>
                    <ReactArrowRigth />
                </button>

                <button onClick={handleClick} className="btn-earth">
                    <div>
                        <svg height="100" width="100">
                            <circle
                                cx="50"
                                cy="50"
                                r="15"
                                stroke="black"
                                stroke-width="3"
                                fill={planetColor("earth")}
                            />
                        </svg>
                        <p>EARTH</p>
                    </div>
                    <ReactArrowRigth />
                </button>

                <button onClick={handleClick} className="btn-mars">
                    <div>
                        <svg height="100" width="100">
                            <circle
                                cx="50"
                                cy="50"
                                r="15"
                                stroke="black"
                                stroke-width="3"
                                fill={planetColor("mars")}
                            />
                        </svg>
                        <p>MARS</p>
                    </div>
                    <ReactArrowRigth />
                </button>

                <button onClick={handleClick} className="btn-jupiter">
                    <div>
                        <svg height="100" width="100">
                            <circle
                                cx="50"
                                cy="50"
                                r="15"
                                stroke="black"
                                stroke-width="3"
                                fill={planetColor("jupiter")}
                            />
                        </svg>
                        <p>JUPITER</p>
                    </div>
                    <ReactArrowRigth />
                </button>

                <button onClick={handleClick} className="btn-saturn">
                    <div>
                        <svg height="100" width="100">
                            <circle
                                cx="50"
                                cy="50"
                                r="15"
                                stroke="black"
                                stroke-width="3"
                                fill={planetColor("saturn")}
                            />
                        </svg>
                        <p>SATURN</p>
                    </div>
                    <ReactArrowRigth />
                </button>

                <button onClick={handleClick} className="btn-uranus">
                    <div>
                        <svg height="100" width="100">
                            <circle
                                cx="50"
                                cy="50"
                                r="15"
                                stroke="black"
                                stroke-width="3"
                                fill={planetColor("uranus")}
                            />
                        </svg>
                        <p>URANUS</p>
                    </div>
                    <ReactArrowRigth />
                </button>

                <button onClick={handleClick} className="btn-neptune">
                    <div>
                        <svg height="100" width="100">
                            <circle
                                cx="50"
                                cy="50"
                                r="15"
                                stroke="black"
                                stroke-width="3"
                                fill={planetColor("neptune")}
                            />
                        </svg>
                        <p>NEPTUNE</p>
                    </div>
                    <ReactArrowRigth />
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
