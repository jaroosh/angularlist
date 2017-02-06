"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var EventsListComponent = (function () {
    function EventsListComponent() {
        this.event1 = {
            id: 1,
            name: 'My event',
            date: '12/12/1029',
            time: '10:00 am',
            location: {
                city: 'Lato'
            }
        };
    }
    EventsListComponent.prototype.handleClick = function () {
        alert('in click');
    };
    EventsListComponent = __decorate([
        core_1.Component({
            template: "\n     <div>\n            <h1>Events</h1>\n            <hr />\n           <event-thumbnail #thumb [event]=\"event1\" (eventClick) = \"handleClick($event)\"></event-thumbnail>\n           <button (click)=\"thumb.logGoo()\">{{ thumb.someProp }} </button>\n           <h2 class=\"makeNoise\">Im jooohny!!!</h2>\n        </div>\n    ",
            selector: 'events-list',
            styleUrls: ['app/events/events-list-component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], EventsListComponent);
    return EventsListComponent;
}());
exports.EventsListComponent = EventsListComponent;
//# sourceMappingURL=events-list-component.js.map