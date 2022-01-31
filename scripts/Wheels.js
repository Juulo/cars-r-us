import { getWheels } from "./database.js"

const wheels = getWheels()

export const Wheels = () => {
    let html = `<h2>Wheels</h2>`

    html += `<select id="wheel">`
    html += `<option value="0">Select a wheel option</option>`

    for (const wheel of wheels) {
        html += `<option value="${wheel.id}">${wheel.wheelSize}</option>`
    }
    html += `</select>`
    return html
}