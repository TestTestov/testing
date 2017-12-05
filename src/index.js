import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Controller } from './model/Controller.js';
import { Emitter } from './model/Emitter.js';
import { NewPapers } from './model/NewPapers.js';
import { UserBotStorage } from './model/UserBotStorage.js';


//Initializing classes 
const emit = new Emitter();
const stor = new UserBotStorage();
const control = new Controller(stor, emit);


//Creating sources of data
export const vesti = new NewPapers('Vesti', emit);
export const argum = new NewPapers('Argument&Facts', emit);
export const grandmam = new NewPapers('Grandmas advices', emit);

export const dataSource = [vesti, argum, grandmam];

ReactDOM.render(<App 
    control={control}
    emit={emit}
    stor={stor}
    dataSource={dataSource}

/>, document.getElementById('root'));
registerServiceWorker();
