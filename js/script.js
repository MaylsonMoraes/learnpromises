//Criação de promessa
const myPromise = new Promise((resolve, reject)=> {
    const nome = 'Maylson'

    if (nome === 'Maylson') {
        resolve('Usuário Maylson encontrado!')
    } else {
        reject('O usuário Maylson não foi encontrado!')
    }
})

myPromise.then((data) =>{
    console.log(data)
})

//Encadeamento de then's
const myPromise2 = new Promise((resolve,reject)=>{
    const nome = 'Maylson'

    if (nome === 'Maylson') {
        resolve('Usuário Maylson encontrado!')
    } else {
        reject('O usuário Maylson não foi encontrado!')
    }
})

myPromise2.then((data) => {
    return data.toLowerCase()
}).then((stringModificada) => {
    console.log(stringModificada)
})

// Retorno do catch
const myPromise3 = new Promise((resolve,reject)=>{
    const nome = 'Moraes'

    if (nome === 'Maylson') {
        resolve('Usuário Maylson encontrado!')
    } else {
        reject('O usuário Maylson não foi encontrado!')
    }
})

myPromise3

