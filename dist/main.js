"use strict";

var _clientes = _interopRequireDefault(require("./clientes.js"));

var _impuestos = _interopRequireDefault(require("./impuestos"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var impuestoA = new _impuestos["default"](580, 253);
var clienteA = new _clientes["default"]("Nicolas", impuestoA);
console.log("Cliente: ".concat(clienteA._nombre, ". Valor impuesto Bruto ").concat(impuestoA._monto_bruto_anual));
console.log("Cliente: ".concat(clienteA._nombre, ". Valor deduccion: ").concat(impuestoA._deducciones));
console.log("El cliente: ".concat(clienteA._nombre, " , paga el siguiente porcentaje de impuesto: ").concat(clienteA.calcular())); //-------------------------------------------------------------------------------------------------------------------

impuestoA._monto_bruto_anual = 600;
impuestoA._deducciones = 540;
clienteA._nombre = "Daniela";
console.log("Cliente: ".concat(clienteA._nombre, ". Valor impuesto Bruto ").concat(impuestoA._monto_bruto_anual));
console.log("Cliente: ".concat(clienteA._nombre, ". Valor deduccion: ").concat(impuestoA._deducciones));
console.log("El cliente: ".concat(clienteA._nombre, " , paga el siguiente porcentaje de impuesto: ").concat(clienteA.calcular())); //Para correr el archivo transpilado main.js se utiliza----> node dist/main.js