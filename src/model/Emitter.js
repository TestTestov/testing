 //Class for emitter --------------------------------------------------------------------------
export class Emitter {
    constructor() {
        this.events = {};
    }

    subscribe (type, func) {
        if(!this.events[type]) {
            this.events[type] = [];
        }
        this.events[type].push(func);
    }

    unsubscribe (type, func) {
        this.events[type] = this.events[type].filter( eventFunc => func !== eventFunc);
    }

    notify(type, data) {
        let typeEvent = this.events[type];
        if (typeEvent) {
            typeEvent.forEach(fn => fn(data, type));
        } 
    }
}