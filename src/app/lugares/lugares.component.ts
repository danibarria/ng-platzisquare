import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./app.component.css']
})
export class LugaresComponent {
    //declaraciones
    title = 'PlatziSquare';
    button_disabled = true;
    texto_descriptivo = 'Todavia no se puede';
    input_nombre:string = '';
    input_apellido:string = '';
  
    /*-43.240860, -65.305252 */
    lat: number = -43.240860;
    lng: number = -65.305252;
  
    lugares:any = [
      {plan:'gratuito',cercania:1, distancia:1, active: false, nombre:'Floreria La Gardenia'},
      {plan:'pagado',cercania:1, distancia:1.8, active: true, nombre:'Donas la pasadita'},
      {plan:'pagado',cercania:2, distancia:8, active: true, nombre:'Veterinaria Huellitas Felices'},
      {plan:'gratuito',cercania:2, distancia:10, active: false, nombre:'Floreria La Gardenia'},
      {plan:'gratuito',cercania:3, distancia:35, active: false, nombre:'Donas la pasadita'},
      {plan:'gratuito',cercania:3, distancia:120, active: false, nombre:'Veterinaria Huellitas Felices'}
    ];
  
    constructor(){
      setTimeout(()=>{this.button_disabled=false;this.texto_descriptivo = 'Ahora si';}, 2000);
    }
  
    click_Handler(){
      this.texto_descriptivo = 'Gracias por enviar';
      this.button_disabled = true;
    }
}
