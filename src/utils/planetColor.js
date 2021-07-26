const planetColor = (planetName) => {
    switch (planetName) {
        case "mercury":
            return "#419ebb";
        case "venus":
            return "#eda249";
        case "earth":
            return "#6d2ed5";
        case "mars":
            return "#d14c32";
        case "jupiter":
            return "#d83a34";
        case "saturn":
            return "#cd5120";
        case "uranus":
            return "#1ec1a2";
        case "neptune":
            return "#2d68f0";
    }
};

export default planetColor;


