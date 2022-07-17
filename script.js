alert('This Page Is Not Responsive(still in progress)')

function com(){
    const comp = Math.random()
    if (comp < 0.35) return 'gunting';
    if (comp >0.35 && comp <= 0.75) return 'kertas';
    return 'batu';
}

function getHasil(comp, player){
    if (player == comp) return 'SERI';
    if (player == 'batu') return (comp == 'gunting') ? 'MENANG' : 'KALAH' ;
    if (player == 'gunting') return (comp == 'batu') ? 'KALAH' : 'MENANG';
    if (player == 'kertas') return (comp == 'batu') ? 'MENANG' : 'KALAH'; 
}

function emote(comp) {
    if (comp == 'gunting') return '&#x270C;';
    if (comp == 'batu') return '&#x270A;';
    if (comp == 'kertas') return '&#x270B;';
}

const pG = document.querySelector('.gunting')
pG.addEventListener('click', function() {
    const pilihanComputer = com();
    const pilihanPlayer = 'gunting';
    const Hasil = getHasil(pilihanComputer, pilihanPlayer)

    const emoteComp = document.querySelector('.p2')
    const newEmote = emote(pilihanComputer)
    emoteComp.innerHTML = newEmote

    const emotePlayer = document.querySelector('.p1')
    emotePlayer.innerHTML = '&#x270C;';

    const visHasil = document.querySelector('h1')
    visHasil.innerHTML = Hasil

    console.log(Hasil)
    console.log(pilihanComputer)
    console.log(pilihanPlayer)
})

const pB = document.querySelector('.batu')
pB.addEventListener('click', function() {
    const pilihanComputer = com();
    const pilihanPlayer = 'batu';
    const Hasil = getHasil(pilihanComputer, pilihanPlayer)

    const emoteComp = document.querySelector('.p2')
    const newEmote = emote(pilihanComputer)
    emoteComp.innerHTML = newEmote

    const emotePlayer = document.querySelector('.p1')
    emotePlayer.innerHTML = '&#x270A;';

    const visHasil = document.querySelector('h1')
    visHasil.innerHTML = Hasil

    console.log(Hasil)
    console.log(pilihanComputer)
    console.log(pilihanPlayer)
})

const pK = document.querySelector('.kertas')
pK.addEventListener('click', function() {
    const pilihanComputer = com();
    const pilihanPlayer = 'kertas';
    const Hasil = getHasil(pilihanComputer, pilihanPlayer)

    const emoteComp = document.querySelector('.p2')
    const newEmote = emote(pilihanComputer)
    emoteComp.innerHTML = newEmote

    const emotePlayer = document.querySelector('.p1')
    emotePlayer.innerHTML = '&#x270B;';

    const visHasil = document.querySelector('h1')
    visHasil.innerHTML = Hasil

    console.log(Hasil)
    console.log(pilihanComputer)
    console.log(pilihanPlayer)
})