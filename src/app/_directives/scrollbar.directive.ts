// Angular imports
import { Directive, ElementRef, Input, OnInit } from '@angular/core';
// Declarations
declare var $: any;

@Directive({
    selector: '[appScrollbar]'
})
export class ScrollbarDirective implements OnInit {
    // Angular Variables
    @Input() scrollbarType: string = null;

    /**
     * Constructor
     * **************************************************
     */
    constructor(
        private el: ElementRef
    ) { }

    /**
     * NgOnInit
     * **************************************************
     */
    ngOnInit() {
        // Set jQuery custom scrollbar
        switch (this.scrollbarType) {
            case 'x':
                {
                    this.customScrollbar(this.el.nativeElement, 'x');
                };
                break;
            case 'y':
                {
                    this.customScrollbar(this.el.nativeElement, 'y');
                };
                break;
            case 'yx':
                {
                    this.customScrollbar(this.el.nativeElement, 'yx');
                };
                break;
            default:
                {
                    this.customScrollbar(this.el.nativeElement);
                };
        }
    }

    private customScrollbar(el: any, type: string = 'y') {
        $(el).mCustomScrollbar({
            axis: type,
            theme: "minimal-dark"
        });
    }
}
