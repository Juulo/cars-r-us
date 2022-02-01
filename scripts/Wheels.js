import { getWheels, setWheels } from "./database.js"

const wheels = getWheels()

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id.startsWith("wheel")) {
            const [, wheelId] = event.target.value.split("--")

            for (const wheel of wheels) {
                if (wheel.id === parseInt(wheelId)) {
                    setWheels(parseInt(event.target.value))
                }
            }
        }
    }
)

export const Wheels = () => {
    let html = `<h2>Wheels</h2>`

    html += `<select id="wheel">`
    html += `<option value="0">Select a wheel option</option>`

    for (const wheel of wheels) {
        html += `<option value="wheel--${wheel.id}">${wheel.wheelSize}</option>`
    }
    html += `</select>`
    return html
}