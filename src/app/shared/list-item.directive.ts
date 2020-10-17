import { Directive, HostBinding, HostListener, Input } from "@angular/core";


@Directive({
    selector: '[appListItem]'
})
export class ListItemDirective{

    @HostBinding('style.background') background = 'transparent';
    @Input('editable')edit: boolean;

    @HostListener('click') changeColor()
    {
        if(this.edit===false){
            if(this.background==='transparent'){
                this.background='#FF333C'
            }else{
                this.background='transparent'
            }   
        }else{
            this.background='transparent';
        }
    }
}