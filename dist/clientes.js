"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Cliente = /*#__PURE__*/function () {
  function Cliente() {
    var nombre = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var impuesto = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, Cliente);

    this._nombre = nombre;
    this._impuesto = impuesto;
  }

  _createClass(Cliente, [{
    key: "nombre",
    get: function get() {
      return this._nombre;
    },
    set: function set(nuevo_nombre) {
      this._nombre = nuevo_nombre;
    }
  }, {
    key: "calcular",
    value: function calcular() {
      // console.log(`Valor de monto Bruto:`, this.impuesto().#monto_bruto_anual());
      var a = this._impuesto._monto_bruto_anual; // console.log("Valor de deduccion:", this.impuesto().#deduccion());

      var b = this._impuesto._deducciones;
      return (a - b) % 21;
    }
  }]);

  return Cliente;
}();

exports["default"] = Cliente;