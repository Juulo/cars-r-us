import { getInterior, setInterior } from "./database.js"
// set function to a variable
const interiors = getInterior()

// whatever the user selects will show up in a window alert
document.addEventListener(
    "click",
    (event) => {
        if (event.target.id.startsWith("interior")) {
            const interiorId = event.target.value

            for (const interior of interiors) {
                if (interior.id === parseInt(interiorId)) {
                    setInterior(parseInt(event.target.value))
                }
            }
        }
    }
)
// create a component to export a concactenated string that shows options and allow users to select
export const Interiors = () => {
    let html = `<h2>Interiors</h2>`

    html += `<select id="interior">`
    html += `<option value="0">Select an interior material</option>`

    for (const interior of interiors) {
        html += `<option value="${interior.id}">${interior.material}</option>`
    }
    html += `</select>`

    return html
}