let audios = [
    {local:'./assets/sounds/dança_gatinho.mp3' , legenda:'Dança Gatinho'},
    {local:'./assets/sounds/ele_gosta.mp3' , legenda:'Ele Gosta'},
    {local:'./assets/sounds/PARE.mp3' , legenda:'PARE'},
    {local:'./assets/sounds/que_isso_meu_filho_calma.mp3' , legenda:'Que isso meu fio'},
    {local:'./assets/sounds/TOME.mp3' , legenda:'TOME'},
    {local:'./assets/sounds/UIII.mp3' , legenda:'UIII'},
]

let buttons = document.querySelectorAll('.button');
let nameeffect = document.querySelectorAll('p');

for (let i=0; i < 6; i++){
    nameeffect[i].textContent = audios[i].legenda;
    buttons[i].setAttribute('data-item' , i)
}

let audio = document.querySelector('audio')

buttons.forEach(button => {
    button.addEventListener('click', () => {
      let som = audios[button.getAttribute('data-item')];
      audio.setAttribute('src', som.local);

      audio.addEventListener('loadeddata', () => {
        audio.play();
      })
    })
})

