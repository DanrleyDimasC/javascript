function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'manha.png'
        document.body.style.background = '#d5edfe'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#bd8551'
    } else {
        // BOA NOITE!
        img.src = 'noite.png'
        document.body.style.background = '#012555'
    }
}

