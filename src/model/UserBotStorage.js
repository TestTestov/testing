import { User, Bot } from './Subscribers'

//Class storage for subscribers --------------------------------------------------------------------------
export class UserBotStorage {
    constructor() {
        this.userStorage = [];                      
        this.botStorage = [];
        this.delUser = this.delUser.bind(this)
        this.delBot = this.delBot.bind(this)
    }

    addUser = (name) => {
        let objUser = new User(name);                                                    //modify to joining arrays and methods
        this.userStorage.push(objUser);
    }

    addBot = (name) => {
        let objBot = new Bot(name);
        this.botStorage.push(objBot);
    }

    delUser (name) {                                              
        this.userStorage = this.userStorage.filter( userName => userName.name !== name )
    }

    delBot (name)  {
        this.botStorage = this.botStorage.filter( botName => botName.name !== name );
    }

    getSubscriber = (name,type) => {
        if( type === 'user' ) {
            let obj = this.userStorage.filter( userName => userName.name === name )
            return obj[0].update;                                                      //the method of calling is not flexible
        } else {
            let obj = this.botStorage.filter(botName => botName.name === name)
            return obj[0].convert;                                                    //the method of calling is not flexible
        }

    }

}
