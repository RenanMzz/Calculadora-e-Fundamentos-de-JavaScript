/* //O que são vetores ou arrays

//Como declarar um array
let array = ['string', 1, true]
console.log(array) */

//Pode guardar vários tipos de dados
/* let array1 = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']] */
/* console.log(array1) */

/* //forEach
array1.forEach(function(item, index){console.log(item, index)}) */

/* //Push
array1.push('novo item')
console.log(array1) */

/* array1.pop()
console.log(array1) */

/* array1.shift()
console.log(array1) */

/* array1.unshift('Novo item')
console.log(array1) */

/* console.log(array1.indexOf(true)) */

/* array1.splice(0, 3)
console.log(array1) */

/* let novoArray = array1.slice(0, 3)
console.log(novoArray) */

let object = {string: 'string', number: 10, boolean: true, array: ['array'], objectInterno: {objectInterno: 'objeto interno'}}
/* console.log(object.number) */

/* var string = object.string
console.log(string)

var arrayInterno = object.array
console.log(arrayInterno) */

var {string, boolean, number} = object
console.log(string, boolean, number)