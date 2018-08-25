import {Injectable} from "@angular/core";
@Injectable()
export class LugaresService{
    lugares:any = [
        {id:1, plan:'gratuito',cercania:1, distancia:1, active: false, nombre:'Floreria La Gardenia', description:'Descripcion del lugar.Placeholder.'},
        {id:2, plan:'pagado',cercania:1, distancia:1.8, active: true, nombre:'Donas la pasadita', description:'Descripcion del lugar.Placeholder.'},
        {id:3, plan:'pagado',cercania:2, distancia:8, active: true, nombre:'Veterinaria Huellitas Felices', description:'Descripcion del lugar.Placeholder.'},
        {id:4, plan:'gratuito',cercania:2, distancia:10, active: false, nombre:'Floreria La Gardenia', description:'Descripcion del lugar.Placeholder.'},
        {id:5, plan:'pagado',cercania:3, distancia:35, active: true, nombre:'Donas la pasadita', description:'Descripcion del lugar.Placeholder.'},
        {id:6, plan:'gratuito',cercania:3, distancia:120, active: false, nombre:'Veterinaria Huellitas Felices', description:'Descripcion del lugar.Placeholder.'}
      ];

    public getLugares(){
        return this.lugares;
    }
    public buscarLugar(id){
        return this.lugares.filter((lugar) => {return lugar.id == id})[0] || null;
    }
}