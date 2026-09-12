import { getAlunos } from "../servico.js"

function criarCard (aluno){
    const card = document.createElement('div')
    card.className = 'aluno-card'

    const foto = document.createElement('img')
    foto.src = aluno.foto

    const nomeAluno = document.createElement('h3')
    nomeAluno.textContent = aluno.nome

    card.append(foto, nomeAluno)

    return card
}

export async function carregarAlunos(curso) {
    const main = document.getElementById('main')
    main.className = 'alunos'

    const titulo = document.createElement('h2')
    titulo.className = 'aluno-titulo'
    if (curso == 1){
        titulo.textContent = 'Desenvolvimento de sistemas'
    }else{
        titulo.textContent = 'Redes de Computadores'
    }

    const cardContainer = document.createElement('div')
    cardContainer.className = 'aluno-card-container'

    const listaAlunos = await getAlunos(curso)
    const cardsAlunos = listaAlunos.map(criarCard)

    cardContainer.replaceChildren(...cardsAlunos)
    main.replaceChildren(titulo, cardContainer)

}