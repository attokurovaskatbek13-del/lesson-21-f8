const phases = [
    { s1: "red", s2: "green", dur: 15 },
    { s1: "yellow", s2: "yellow", dur: 3 },
    { s1: "green", s2: "red", dur: 15 },
    { s1: "yellow", s2: "yellow", dur: 3 },
]

let phase = 0
let timer = phases[0].dur

const r1 = document.getElementById("r1")
const y1 = document.getElementById("y1")
const g1 = document.getElementById("g1")
const r2 = document.getElementById("r2")
const y2 = document.getElementById("y2")
const g2 = document.getElementById("g2")

function fullRender() {
    const p = phases[phase]

    r1.className = "bulb " + (p.s1 === "red" ? "red-on" : "off")
    g1.className = "bulb " + (p.s1 === "green" ? "green-on" : "off")
    y1.className = "bulb yellow-on"
    y1.innerHTML = "<span>" + timer + "</span>"

    r2.className = "bulb " + (p.s2 === "red" ? "red-on" : "off")
    g2.className = "bulb " + (p.s2 === "green" ? "green-on" : "off")
    y2.className = "bulb yellow-on"
    y2.innerHTML = "<span>" + timer + "</span>"
}

fullRender()

setInterval(() => {
    timer--
    if (timer <= 0) {
        phase = (phase + 1) % phases.length
        timer = phases[phase].dur
    }
    fullRender()
}, 1000)
