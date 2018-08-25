import { Component } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
//   styleUrls: ['./app.component.css']
})
export class DetalleComponent {  
  id=null;
  lugar:any = {};
  constructor(private route:ActivatedRoute, private lugaresService:LugaresService){
    console.log(this.route.snapshot.params['id']);
    console.log(this.route.snapshot.queryParams['action2']);
    console.log(this.route.snapshot.queryParams['referer']);
    this.id = this.route.snapshot.params['id'];
    this.lugar = this.lugaresService.buscarLugar(this.id);
    console.log(this.lugaresService.buscarLugar(this.id))
  }

}
