const buttonMenu = document.querySelectorAll('.categoriaMenu')
const header = document.querySelector('#cabecalho')

for(let i = 0; i < buttonMenu.length; i++){
    buttonMenu[i].addEventListener('click', () => {
        removeActive()
        buttonMenu[i].classList.add('active')
    })
}

function removeActive() {
    buttonMenu.forEach((target) => {
        target.classList.remove('active')
    })
}

window.addEventListener("scroll", function() {
    header.classList.toggle("active", window.scrollY > 50);
})


