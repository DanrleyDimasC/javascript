var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora}.`)
if (hora < 12 && hora >= 6) {
    console.log('Bom Dia!')
} else if (hora <= 18 && hora >= 12) {
    console.log('Boa Tarde!')
} else if (hora > 18) {
    console.log('Boa Noite!')
}  else if (hora >= 0 && hora < 6 ) {
    console.log('Boa Madrugada!')
}