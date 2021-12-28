

export default class Cliente {
    
    constructor(nombre=[] , impuesto) {
        this._nombre = nombre;
        this._impuesto = impuesto

    }

    get nombre() {
        return this._nombre
    }

    set nombre(nuevo_nombre) {
        this._nombre = nuevo_nombre
    }

    calcular() {
        // console.log(`Valor de monto Bruto:`, this.impuesto().#monto_bruto_anual());
        let a = this._impuesto._monto_bruto_anual;
        // console.log("Valor de deduccion:", this.impuesto().#deduccion());
        let b = this._impuesto._deducciones;
        
         return((a - b) % 21)

    }
   
    

}


