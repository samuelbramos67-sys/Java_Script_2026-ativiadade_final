import { carregarAlunos } from "./alunos.js"

export function carregarHome () {
    const main = document.getElementById('main')
    main.className = ''
    
    const descricao = document.createElement('div')
    descricao.className = 'descricao'
    const texto = document.createElement('span')
    texto.textContent = 'Escolha um curso para gerenciar'
    const imgPc = document.createElement('img')
    imgPc.src = './img/devices.png'
    descricao.append (texto, imgPc)

    const imagem = document.createElement('img')
    imagem.className = 'imagem'
    imagem.src = './img/studant.png'

    const cursos = document.createElement('div')
    cursos.className = 'cursos'

    const buttonDs = document.createElement('button')
    buttonDs.textContent = 'DS'
    const imgDs = document.createElement('img')
    imgDs.src = './img/ds.png'
    buttonDs.append(imgDs)
    buttonDs.onclick = () => carregarAlunos (1)

    const buttonRedes = document.createElement('button')
    buttonRedes.textContent = 'REDES'
    const imgRedes = document.createElement('img')
    imgRedes.src = './img/redes.png'
    buttonRedes.append(imgRedes)
    buttonRedes.onclick = () => carregarAlunos (2)

    cursos.append (buttonDs, buttonRedes)

    main.replaceChildren(descricao, imagem, cursos)
}