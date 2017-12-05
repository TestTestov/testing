
import {root, dataArray} from './ServerData';
import data from './data/data.js';


//Class for data creators --------------------------------------------------------------------------
export class NewPapers {
    constructor(name, emitter) {
        this.name = name;
        this.emitter = emitter;
    }

    addDataManual = (data) => {
        let news = `${this.name}: ` + data;
        this.emitter.notify(this.name, news);
        this.emitter.notify('typeApp');
    }

    addDataAuto = () => {
        let i = 0;
        let time = setInterval(() => {
            if (i == data.length) {
                noNewsMassage();
                clearInterval(time);
            } else {
                let news =`${this.name}: ` + data[i].title;
                this.emitter.notify(this.name, news);
                this.emitter.notify('typeApp');
                i++;
            }
        }, 5000)

        let noNewsMassage = () => {
            let message = `${this.name} have no news `;
            alert(message);
            //this.emitter.subscribe('warning')
            //this.emitter.notify( 'warning',message);
        }
    }

    addDataServer = () => {

        dataArray().then(obj => {
            let i = 0;
            let time = setInterval(() => {
                if (i == obj.length) {
                    noNewsMassage();
                    clearInterval(time);
                } else {
                    let news = `${this.name}: ` + obj[i].name;
                    this.emitter.notify(this.name, news);
                    this.emitter.notify('typeApp');
                    i++;
                }
            }, 10000)
        });

        let noNewsMassage = () => {
            let message = ` ${this.name} have no news `;
            alert(message);
        }
    }
}