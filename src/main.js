import Cliente from "./clientes.js"
import Impuesto from "./impuestos"



let impuestoA = new Impuesto( 580 ,253)
let clienteA = new Cliente("Nicolas", impuestoA)
console.log(`Cliente: ${clienteA._nombre}. Valor impuesto Bruto ${impuestoA._monto_bruto_anual}`)
console.log(`Cliente: ${clienteA._nombre}. Valor deduccion: ${impuestoA._deducciones}`)


console.log(`El cliente: ${clienteA._nombre} , paga el siguiente porcentaje de impuesto: ${clienteA.calcular()}`)

//-------------------------------------------------------------------------------------------------------------------
impuestoA._monto_bruto_anual = 600 
impuestoA._deducciones = 540
clienteA._nombre = "Daniela"

console.log(`Cliente: ${clienteA._nombre}. Valor impuesto Bruto ${impuestoA._monto_bruto_anual}`)
console.log(`Cliente: ${clienteA._nombre}. Valor deduccion: ${impuestoA._deducciones}`)

console.log(`El cliente: ${clienteA._nombre} , paga el siguiente porcentaje de impuesto: ${clienteA.calcular()}`)


//Para correr el archivo transpilado main.js se utiliza----> node dist/main.js
 


