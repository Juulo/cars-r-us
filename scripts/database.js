const database = {
    orderBuilder: {

    },
    paintColors: [
        {id: 1, color: "Silver", price: 500},
        {id: 2, color: "Midnight Blue", price: 430},
        {id: 3, color: "Firebrick Red", price: 520},
        {id: 4, color: "Spring Green", price: 350}
    ],
    interiors: [
        {id: 1, material: "Beige Fabric", price: 200},
        {id: 2, material: "Charcoal Fabric", price: 240},
        {id: 3, material: "White Leather", price: 320},
        {id: 4, material: "Black Leather", price: 400}
    ],
    technologies: [
        {id: 1, package: "Basic Package", price: 50},
        {id: 2, package: "Navigation Package", price: 110},
        {id: 3, package: "Visibility Package", price: 220},
        {id: 4, package: "Ultra Package", price: 320}
    ],
    wheels: [
        {id: 1, wheelSize: "17-inch Pair Radial", price: 123},
        {id: 2, wheelSize: "17-inch Pair Radial Black", price: 313},
        {id: 3, wheelSize: "18-inch Pair Spoke Silver", price: 324},
        {id: 4, wheelSize: "18-inch Pair Spoke Black", price: 345 }
    ],
    carOrders: [
        {
            id: 1,
            paintColorId: 2,
            interiorId: 3,
            technologyId: 4,
            wheelsId: 2,
            timestamp: 12367876321
        }
    ]
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

export const getCarOrder = () => {
    return database.carOrders.map(carOrder => ({...carOrder}))
}

export const setPaintColor = (id) => {
    database.orderBuilder.paintColorId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelsId = id
}

export const addCustomOrder = () => {
    // this function copies the current state of the user choices
    const newOrder = {...database.orderBuilder}

    // this adds a new primary key to the object
    const lastIndex = database.carOrders.length - 1
    newOrder.id = database.carOrders[lastIndex].id + 1

    // this adds a timestamp property to the order
    newOrder.timestamp = Date.now()

    // adds the new order from the user choices to an array
    database.carOrders.push(newOrder)

    // resets the state of orderBuilder object to take in new user choices
    database.orderBuilder = {}

    // gives a notification that the permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}