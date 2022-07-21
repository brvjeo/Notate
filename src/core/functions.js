export function trimSpaces(str) { // think about Array.prototype.splice.call(str,...);
    str = [...str];

    let index = str.findIndex(value => value == ' ');
    while (index != -1) {
        str.splice(index, 1);
        index = str.findIndex(value => value == ' ');
    }

    return str.join('');
}

export function cutString(str, substr) {
    return str.substring(str.indexOf(substr) + substr.length);
}

export class FormHandler {
    static transferToJSON(formdata) {
        return JSON.stringify(FormHandler.transferToObject(formdata));
    }

    static transferToObject(formdata) {
        let data = {};
        for (let [key, value] of formdata.entries()) {
            data[key] = value;
        }
        return data;
    }
}