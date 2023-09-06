const buttonMenu = document.querySelectorAll('.categoriaMenu')

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