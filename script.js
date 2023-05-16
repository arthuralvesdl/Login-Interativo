var olho = document.querySelector('.olho')
var boca = document.querySelector('.boca')
var pupila = document.querySelector('.pupila',)
var enviar = document.querySelector('.enviar')
var cabeca = document.querySelector('.cabeca')
let usuario = document.getElementById('usuario')
let senha = document.getElementById('senha')
var beforeLeft = 35
var left = 2

usuario.addEventListener('focus', () => {
    pupila.style.setProperty('--beforeTopPupila', `${0}px`)
    pupila.style.setProperty('--topPupila', `${10}px`)

    if (usuario.value.length < 34) {
        pupila.style.setProperty('--beforeLeftPupila', `${(usuario.value.length * 0.02) + beforeLeft}px`)
        pupila.style.setProperty('--leftPupila', `${(usuario.value.length * 0.2) + left}px`)
    }
})

usuario.addEventListener('focusout', () => {
    pupila.style.setProperty('--topPupila', `${5}px`)
    pupila.style.setProperty('--leftPupila', `${5}px`)
    pupila.style.setProperty('--beforeLeftPupila', `${35}px`)
})
usuario.addEventListener('input', () => {
    pupila.style.setProperty('--beforeTopPupila', `${0}px`)
    pupila.style.setProperty('--topPupila', `${10}px`)

    if (usuario.value.length < 34) {
        pupila.style.setProperty('--beforeLeftPupila', `${(usuario.value.length * 0.02) + beforeLeft}px`)
        pupila.style.setProperty('--leftPupila', `${(usuario.value.length * 0.2) + left}px`)
    }
})

senha.addEventListener('focus', () => {
    olho.style.setProperty('--Holho', '1px')
    olho.style.setProperty('--HbeforeOlho', '1px')
    olho.style.setProperty('--topOlho', '45px')
    pupila.style.setProperty('--Hpupila', `1px`)
    pupila.style.setProperty('--HbeforePupila', `1px`)
    pupila.style.setProperty('--topPupila', `1px`)
    boca.style.setProperty('--bocaH', `4px`)
    boca.style.setProperty('--bocaW', `10px`)

})

senha.addEventListener('focusout', () => {
    olho.style.setProperty('--Holho', '20px')
    olho.style.setProperty('--HbeforeOlho', '20px')
    olho.style.setProperty('--topOlho', '35px')
    pupila.style.setProperty('--Hpupila', `10px`)
    pupila.style.setProperty('--HbeforePupila', `10px`)
    pupila.style.setProperty('--topPupila', `5px`)
    boca.style.setProperty('--bocaW', `30px`)
    boca.style.setProperty('--bocaH', `15px`)
})

enviar.addEventListener('click', () => {
    let user = usuario.value
    let pass = senha.value

    if (user !== 'arthuralveslacerda@gmail.com' || pass !== 'senha') {
        boca.style.setProperty('--bocaRadius', '100px 100px 0px 0px')
        cabeca.style.transform = ' rotate(2deg)'
        setTimeout(() => {
            cabeca.style.transform = ' rotate(-2deg)'
        }, 400)

        setTimeout(() => {
            boca.style.setProperty('--bocaRadius', '0 0 100px 100px')
            cabeca.style.transform = ' rotate(0deg)'
        }, 1500)
    } else {
        cabeca.style.transform = ' rotate(20deg)'
        olho.style.setProperty('--HbeforeOlho', '1px')
        pupila.style.setProperty('--HbeforePupila', '1px')
        pupila.style.setProperty('--beforeTopPupila', '3px')
        olho.style.setProperty('--BeforeTopOlho', '8px')
        setTimeout(() => {
            cabeca.style.transform = ' rotate(0deg)'

            olho.style.setProperty('--HbeforeOlho', '20px')
            pupila.style.setProperty('--HbeforePupila', '10px')
            pupila.style.setProperty('--beforeTopPupila', '0px')
            olho.style.setProperty('--BeforeTopOlho', '0px')
        }, 1000)
    }
})