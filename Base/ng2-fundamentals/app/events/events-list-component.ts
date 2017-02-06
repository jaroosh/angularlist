import {Component } from '@angular/core'

@Component({
    template : `
     <div>
            <h1>Events</h1>
            <hr />
           <event-thumbnail #thumb [event]="event1" (eventClick) = "handleClick($event)"></event-thumbnail>
           <button (click)="thumb.logGoo()">{{ thumb.someProp }} </button>
           <h2 class="makeNoise">Im jooohny!!!</h2>
        </div>
    `,
    selector : 'events-list',
    styleUrls : [ 'app/events/events-list-component.css' ]
})
export class EventsListComponent {
    event1 = {
        id : 1 ,
        name : 'My event',
        date : '12/12/1029',
        time : '10:00 am',
        location : {
            city : 'Lato'
        }
    };

    private handleClick() {
        alert('in click');
    }
}