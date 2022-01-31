import { getInterior, setInterior } from "./database.js"

const interiors = getInterior()

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "paint") {
            setInterior(parseInt((`User chose ${event.target.material}`)))
        }
    }
)

export const Interiors = () => {
    let html = `<h2>Interiors</h2>`

    html += `<select id="paint">`
    html += `<option value="0">Select an interior material</option>`

    for (const interior of interiors) {
        html += `<option value="${interior.id}">${interior.material}</option>`
    }
    html += `</select>`

    return html
}