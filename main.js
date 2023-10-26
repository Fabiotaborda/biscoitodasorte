const btnLuck = document.querySelector("#btnLuck")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const luckyText = [
    "",
    "A vida trará coisas boas se tiver paciência.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
]


btnLuck.addEventListener('click', handleLuck)
btnReset.addEventListener('click', handleReset)
document.addEventListener('keydown', enterReset)

function handleLuck(event) {
    event.preventDefault()
    let ramdomNumber = Math.round(Math.random() * 4)
    console.log(ramdomNumber)
    if(ramdomNumber != 0){
        screen2.querySelector("p")
        .innerText = luckyText[ramdomNumber]
    }

    toggleScreen()    
}

function handleReset() {

    toggleScreen()
}

function toggleScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

function enterReset(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')){
        handleReset()
    }
}