import { getCarOrder, getInterior, getPaintColor, getTechnology, getWheels } from "./database.js";

const interiors = getInterior();
const paintColors = getPaintColor();
const technologies = getTechnology();
const wheels = getWheels();

const buildOrderListItem = (order) => {
    // .find methods to search each for array for their primary key
    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    const foundPaintColor = paintColors.find(
        (paintColor) => {
            return paintColor.id === order.paintColorId
        }
    )
    const foundTech = technologies.find(
        (technology) => {
            return technology.id === order.technologyId
        }
    )
    const foundWheel = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelsId
        }
    )
    // variable to be our sum of costs
    const totalCarCost = foundInterior.price + foundPaintColor.price + foundTech.price + foundWheel.price
    // To automatically format the number as currency
    const costString = totalCarCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>Order #${order.id} cost ${costString}<br>${order.timestamp}</li>`
}


export const Orders = () => {
    const carOrders = getCarOrder()

    let html = "<ul>"

    const listItems = carOrders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}