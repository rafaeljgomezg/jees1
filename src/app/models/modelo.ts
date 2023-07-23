export interface  DireccionesCelulas {
    item: number;
    name: String;
    address: String;
    horario: String;
    lider: String;

    /*constructor(item: number, name: String, address:String, horario:String, lider: String){
        this.item=item;
        this.name=name;
        this.address=address;
        this.horario=horario;
        this.lider=lider;
    }*/
  }


export class UserContact {
    nombre: String;
    telefono: String;
    email:String;
    texto:String;

    constructor(nombre: String, telefono: String, email: String, texto: String){
        this.nombre=nombre;
        this.telefono=telefono;
        this.email=email;
        this.texto=texto;
    }
}