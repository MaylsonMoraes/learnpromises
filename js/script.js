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

myPromise3.then((data) => {
        console.log(data)
    }).catch((err) => {
        console.log('Aconteceu um erro: ' +err)
    })

// Resolver varias promessas
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve('P1 ok!')
    }, 2000);
})

const p2 = new Promise((resolve, reject) => {
    resolve('P2 ok!')
})

const p3 = new Promise((resolve, reject) => {
    resolve('P3 ok!')
})

const resolveALL = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data)
})

console.log('Depois do all()')

// Várias promessas com Race
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve('P4 ok!')
    }, 2000);
})

const p5 = new Promise((resolve, reject) => {
    resolve('P5 ok!')
})

const p6 = new Promise((resolve, reject) => {
    resolve('P6 ok!')
})

const resolveAllRace = Promise.race([p4, p5, p6]).then((data) => {
    console.log(data)
})




