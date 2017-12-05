//Classes for subscribers ---------------------------------------------------------------------------
 class Subscribers {
    constructor(name) {
        this.name = name;
    } 
}

export class User extends Subscribers {
    constructor(name) {
        super(name);
        this.type = 'user'
        this.userNewsStore = [];
        this.update = this.update.bind(this);        
    }

    update (data,type) {
        this.userNewsStore.push(data);
    } 
}

export class Bot extends Subscribers {
    constructor(name) {
        super(name);
        this.type = 'bot'
        this.userNewsStore = [];
        this.convert = this.convert.bind(this);
    }

    convert (data,type) {
        this.userNewsStore.push(data.toUpperCase());
    }
}