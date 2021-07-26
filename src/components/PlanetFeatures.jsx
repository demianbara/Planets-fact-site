import * as React from 'react'

export default ({planetData}) => {
    return (
        <div className="main-content-row2">
            <div className="rotation-time">
                <p>ROTATION TIME</p>
                <h2>{planetData.rotation.toUpperCase()}</h2>
            </div>
            <div className="revolution-radius">
                <p>REVOLUTION TIME</p>
                <h2>{planetData.revolution.toUpperCase()}</h2>
            </div>
            <div className="revolution-radius">
                <p>RADIUS</p>
                <h2>{planetData.radius}</h2>
            </div>
            <div className="average-temp">
                <p>AVERAGE TEMP.</p>
                <h2>{planetData.temperature.toUpperCase()}</h2>
            </div>
        </div>
    );
}