//Varíaveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const fortuneCookie = document.querySelector("#fortuneCookie")
const tryAgain = document.querySelector("#tryAgain")

const phfortunes = [
  "O aprendizado é como o horizonte: não há limites.",
  "Não há que ser forte, há que ser flexível.",
  "Limitações são fronteiras criadas apenas pela nossa mente.",
  "O cão não ladra por valentia e sim por medo.",
  "Procure acender uma vela em vez de amaldiçoar a escuridão.",
  "A palavra é prata, o silêncio é ouro.",
  "Lembre-se de que grandes realizações e grandes amores envolvem grandes riscos.",
  "Um pouco de perfume sempre fica nas mãos de quem oferece flores.",
  "O homem só envelhece quando os lamentos substituem seus sonhos.",
  "A persistência realiza o impossível.",
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
]

//Eventos
fortuneCookie.addEventListener('click', clickedCookie)
tryAgain.addEventListener('click', openedCookie)

// Funções
function clickedCookie (event) {
  event.preventDefault()
  toggleScreen()
  phrasesFortunes()
}
function openedCookie () {
  toggleScreen()
}
function toggleScreen () {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}
function phrasesFortunes () {
  let allFortunes = phfortunes.length
  let randomNumber = Math.floor(Math.random() * allFortunes)
  screen2.querySelector("h2").innerText = `${phfortunes[randomNumber]}`
}

