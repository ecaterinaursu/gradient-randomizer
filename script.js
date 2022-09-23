const backgroundColor = document.querySelector(".background")
const first = document.querySelector(".firs_color")
const second = document.querySelector(".second_color")
const sofaColor = document.querySelector(".sofa")
const changeSofa = document.querySelector("img")
const images = ["/img/green.png", "/img/rose.png", "/img/yellow.png", "/img/pink.png", "/img/mint.png", "/img/blue.png",
    "/img/cyan.png", "/img/bluemarin.png", "/img/red.png", "/img/brown.png"];
const changeImage = () => {
    sofaColor.addEventListener("click", ev => {
        const randomImage = Math.floor(Math.random() * 10)
        changeSofa.src = images[randomImage]
    })
}
changeImage()

const gradient = () => {
    backgroundColor.style.background = `radial-gradient(ellipse, ${first.value},${second.value}`
}
first.addEventListener("input", gradient)
second.addEventListener("input", gradient)
const random = () => Math.floor(Math.random() * 16777215)
const getRandomColor = () => "#" + random().toString(16);

const gradientBackground = document.querySelector(".background")
const randomButton = document.querySelector(".gradient_random")
randomButton.addEventListener("click", ev => {
    const firstRandomColor = getRandomColor()
    const secondRandomColor = getRandomColor()
    gradientBackground.style.backgroundImage = `radial-gradient(ellipse, ${firstRandomColor}, ${secondRandomColor}`
    first.value = firstRandomColor;
    second.value = secondRandomColor;
    const randomImage = Math.floor(Math.random() * 10)
    changeSofa.src = images[randomImage]
})
const dimension = document.querySelector(".dimension")
const colorDisplay = () => {
    dimension.textcontent = getRandomColor();
    dimension.addEventListener("mouseleave", colorDisplay)
}
