import { getPaintColor } from "./database.js"

const paints = getPaintColor()

export const Paints = () => {
    let html = `<h2>Paints</h2>`

    html += `<select id="paint">`
    html += `<option value="0">Select a paint colorway</option>`

    for (const paint of paints) {
        html += `<option value="${paint.id}">${paint.color}</option>`
    }
    html += `</select>`
    
    return html
}