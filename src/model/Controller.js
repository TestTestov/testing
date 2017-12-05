/*
 * The Controller. Controller change the model state.
 */

export class Controller {
    constructor(storage, emitter) {
        this.storage = storage;
        this.emitter = emitter;
    }

    addUser = (name) => {
        this.storage.addUser(name)
        this.emitter.notify('typeApp')
    }

    delUser = (name) => {
        this.storage.delUser(name)
        this.emitter.notify('typeApp')
    }

    addBot = (name) => {
        this.storage.addBot(name)
        this.emitter.notify('typeApp')
    }

    delBot = (name) => {
        this.storage.delBot(name)
        this.emitter.notify('typeApp')
    }

    subscribe = (dataSourse, nameSubscriber, typeSubscriber) => {
        this.emitter.subscribe(dataSourse, this.storage.getSubscriber(nameSubscriber, typeSubscriber))
    }

    unsubscribe = (dataSourse, nameSubscriber, typeSubscriber) => {
        this.emitter.unsubscribe(dataSourse, this.storage.getSubscriber(nameSubscriber, typeSubscriber))
    }

    addDataManual = (dataSourse, data) => {
        dataSourse.addDataManual(data)
    }

    addDataAuto = (dataSourse) => {
        dataSourse.addDataAuto()
    }

    addDataServer = (dataSourse) => {
        dataSourse.addDataServer()
    }

}








