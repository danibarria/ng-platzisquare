import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

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
  
  
    click_Handler(){
      this.texto_descriptivo = 'Gracias por enviar';
      this.button_disabled = true;
    }
    lugares = null;
    constructor(private lugaresService: LugaresService){
      this.lugares = lugaresService.getLugares();
    }
}
