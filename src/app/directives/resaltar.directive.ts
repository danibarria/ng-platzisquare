import { Directive, OnInit, ElementRef, Renderer2, Input } from "../../../node_modules/@angular/core";

@Directive({
    selector: '[resaltar]'    
})

export class ResaltarDirective implements OnInit{
    constructor(private elRef: ElementRef,private renderer:Renderer2){

    }
    @Input('resaltar') plan:string = '';
    ngOnInit(){
        if(this.plan === 'pagado'){
            /**modificar un estilo css */
            this.renderer.setStyle(this.elRef.nativeElement,'background-color', 'yellow');
            this.renderer.setStyle(this.elRef.nativeElement,'font-weight', 'bold');

        }
    }
}