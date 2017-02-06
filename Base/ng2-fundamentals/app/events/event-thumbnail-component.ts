import { Component, Input, Output, EventEmitter } from '@angular/core'


@Component({
    selector : 'event-thumbnail',
    template : `
     <div class="well hoverwell thumbnail">
                <h2>{{ event.name }}</h2>
                <div>Time : {{event.time}}</div>
                <button class="btn btn-primary" (click)="handleClick()">FFS click me ! </button>
            </div>
    `
}) 
export class EventThumbnailComponent {
    @Input() event : any;
    @Output() eventClick  = new EventEmitter() 
    public someProp : any = 'hello prop'
    
    private handleClick() {
        this.eventClick.emit('hello');
    }

    public logGoo() {
        alert('goo!');
    }
}