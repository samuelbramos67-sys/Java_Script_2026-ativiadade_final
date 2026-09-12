export async function getAlunos (curso) {
    const url = `https://lion-school-phbo.onrender.com/alunos?curso_id=${curso}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}
