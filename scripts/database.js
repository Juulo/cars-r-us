const database = {
    paintColors: [
        {id: 1, color: "Silver"},
        {id: 2, color: "Midnight Blue"},
        {id: 3, color: "Firebrick Red"},
        {id: 4, color: "Spring Green"}
    ],
    interiors: [
        {id: 1, material: "Beige Fabric"},
        {id: 2, material: "Charcoal Fabric"},
        {id: 3, material: "White Leather"},
        {id: 4, material: "Black Leather"}
    ],
    technologies: [
        {id: 1, tech: "Basic Package"},
        {id: 2, tech: "Navigation Package"},
        {id: 3, tech: "Visibility Package"},
        {id: 4, tech: "Ultra Package"}
    ],
    wheels: [
        {id: 1, wheelSize: "17-inch Pair Radial"},
        {id: 2, wheelSize: "17-inch Pair Radial Black"},
        {id: 3, wheelSize: "18-inch Pair Spoke Silver"},
        {id: 4, wheelSize: "18-inch Pair Spoke Black"}
    ],
    cars: {
        id: 1,
        paintColorId: 2,
        interiorId: 3,
        technologyId: 4,
        wheelsId: 2
    }
}

export const getPaintColor = () => {
    return database.paintColors.map(paintColor => ({...paintColor}))
}
export const getInterior = () => {
    return database.interiors.map(interior => ({...interior}))
}
export const getTechnology = () => {
    return database.technologies.map(technology => ({...technology}))
}
export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}