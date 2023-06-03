

const cart = [10, 244, 99, 2, 20, 33, 250]

let finalValueWithDiscout = 0
let finalSemDesconto = 0

function calculateTotal() {
    const result  = finalSemDesconto + finalSemDesconto
    return result
   }
   
   cart.forEach( (valor) => {

    const valorSemDesconto = finalSemDesconto += valor
    return valorSemDesconto
   }) 

function calculateDiscount(price, discount) {
 const result  = price * discount / 100
 return result
}

cart.forEach( (value) => {

    if (value > 30) {
        const discount = calculateDiscount(value, 10)
        finalValueWithDiscout = finalValueWithDiscout + (value - discount)
    } else {
        finalValueWithDiscout = finalValueWithDiscout + value
    }    
})  


console.log(`O valor final da compra foi de R$ ${finalSemDesconto.toFixed(2)},
porém você teve desconto, irá pagar apenas R$ ${finalValueWithDiscout.toFixed(2)},
você economizou um total de ${finalSemDesconto.toFixed() - finalValueWithDiscout.toFixed()}.00 `)