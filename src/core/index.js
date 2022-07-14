import * as bootstrap from 'bootstrap';
import '../styles/styles';
import { Application } from './application';
import { Component } from './components/component';


const app = new Application();
app.auth();

document.body.insertAdjacentHTML('beforeend',
    new Component('div').addClass('p-3 bg-primary')
        .setTextContent('Div')
        .render()
)