const btn = document.querySelector(".hero-btn button")
btn.addEventListener("click", () => {
    document.querySelector(".hero-modal").style.display = "block"
})

const close = document.querySelector(".hero-modal-bg-square-close")
close.addEventListener("click", () => {
    document.querySelector(".hero-modal").style.display = "none"
})



