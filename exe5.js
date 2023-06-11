function exe5(){

    let logica = []
    let linguagem = []

    for(let i = 0; i < 10; i++){
        logica[i] = Number(prompt('Informe aluno que faz logica'))
    }

    for(let i = 0; i < 10; i++){
        linguagem[i] = Number(prompt('Informe aluno que faz linguagem'))

    }

    let comum = []
    for(let i = 0; i < 10; i++){
        if(linguagem.includes(logica[i])){
            comum.push(logica[i])
        }
    }
    console.log(`Alunos que fazem ambas ${comum}`)
}