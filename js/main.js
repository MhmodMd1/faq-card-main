let main = document.querySelector(".main")
let boxImg = document.querySelector(".box")
let img = document.querySelectorAll("ul li img")
let lineOne = document.querySelectorAll(".line-one .title")
let lineTwo = document.querySelectorAll(".line-two .txt")


img.forEach((e) => {
    e.addEventListener('click', (ele) => {
        if (ele.currentTarget.classList.contains('rotate')){
            img.forEach((e) => {
                e.classList.remove("rotate")
            })
            lineOne.forEach((lines) => {
                lines.classList.remove("active")
            })
            lineTwo.forEach((lines) => {
                lines.style.display = "none"
            })
            main.classList.remove("main-active")
            boxImg.classList.remove("box-active")
        } else {
            main.classList.add("main-active")
            boxImg.classList.add("box-active")
            ele.currentTarget.classList.add("rotate")
            lineOne.forEach((lines) => {
                lines.classList.remove("active")
            })
            lineTwo.forEach((lines) => {
                lines.style.display = "none"
            })
            document.querySelector(`${ele.currentTarget.dataset.count} .txt`).style = "display: block"
            document.querySelector(`.line-one${ele.currentTarget.dataset.count} .title `).classList.add("active")
        }
    })
})