import { getFormControlName } from '../functions';

export class FormHandler {
    static transferToJSON(component) {
        return JSON.stringify(this.transferToObject(component));
    }

    static transferToObject(component){
        let data = new FormData(component.element);
        let json = {};

        for (let pair of data.entries()) {
            json[getFormControlName(pair[0],component.name + '-')] = pair[1];
        }

        return json;
    }

    static get(component, value) {
        return new FormData(component.element).get(component.name + "-" + value);
    }
}