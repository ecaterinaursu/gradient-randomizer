const backgroundColor = document.querySelector(".background")
const first = document.querySelector(".firs_color")
const second = document.querySelector(".second_color")


const gradient = () => {
    backgroundColor.style.background = `radial-gradient(ellipse, ${first.value},${second.value}`
}
first.addEventListener("input", gradient)
second.addEventListener("input", gradient)

const getRandomColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16);
document.querySelector(".gradient_random").addEventListener("click", ev => {
    backgroundColor.style.backgroundImage = `radial-gradient(ellipse, ${getRandomColor()}, ${getRandomColor()}`
})

