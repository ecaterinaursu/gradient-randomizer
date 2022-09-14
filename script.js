const body = document.querySelector("body")
const first = document.querySelector(".firs_color")
const second = document.querySelector(".second_color")


const gradient = () => {
    body.style.background = `linear-gradient(to right, ${first.value},${second.value}`
}
first.addEventListener("input", gradient)
second.addEventListener("input", gradient)