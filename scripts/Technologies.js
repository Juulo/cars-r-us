import { getTechnology, setTechnology } from "./database.js"

const techs = getTechnology()

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id.startsWith("tech")) {
            const [, techId] = event.target.value.split("--")

            for (const tech of techs) {
                if (tech.id === parseInt(techId)) {
                    setTechnology(parseInt(event.target.value))
                }
            }
        }
    }
)

export const Technologies = () => {
    let html = `<h2>Technologies</h2>`
    html += '<select id="tech">'
    html += '<option value="0">Select a technology package</option>'

    for (const tech of techs) {
        html += `<option value="tech--${tech.id}">${tech.package}</option>`
    }

    html += "</select>"
    return html
}