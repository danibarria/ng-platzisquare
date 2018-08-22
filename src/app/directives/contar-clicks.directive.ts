import { Directive, HostListener, HostBinding } from "../../../node_modules/@angular/core";


@Directive({
    selector:'li[contar-clicks]'
    //solo <a src="url/>
})

export class ContarClicksDirective{
    clickN=0;
    @HostBinding('style.opacity') opacity:number = .1;
    @HostListener('click',['$event.target']) onClick(btn){
        console.log('a', btn, "Numero de clicks", this.clickN++);
        this.opacity +=.1;
    }
}