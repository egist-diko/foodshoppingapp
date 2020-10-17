import { Directive, HostBinding, HostListener } from "@angular/core";


@Directive({
    selector: '[appButton]'
})
export class ButtonDirective{

    @HostBinding('class.active') isActive = false;
    

    @HostListener('click') Pressed()
    {
        this.isActive=!this.isActive;
        
    }

}