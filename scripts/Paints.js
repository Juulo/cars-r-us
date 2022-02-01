import { getPaintColor, setWheels } from "./database.js"

const paints = getPaintColor()

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id.startsWith("paint")) {
            const [, paintId] = event.target.value.split("--")

            for (const paint of paints) {
                if (paint.id === parseInt(paintId)) {
                    setWheels(parseInt(event.target.value))
                }
            }
        }
    }
)

export const Paints = () => {
    let html = `<h2>Paints</h2>`

    html += `<select id="paint">`
    html += `<option value="0">Select a paint colorway</option>`

    for (const paint of paints) {
        html += `<option value="paint--${paint.id}">${paint.color}</option>`
    }
    html += `</select>`
    
    return html
}