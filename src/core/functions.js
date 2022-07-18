export function trimSpaces(str){ // think about Array.prototype.splice.call(str,...);
    str = [...str];

    let index = str.findIndex(value => value == ' ');
    while(index != -1){
        str.splice(index,1);
        index = str.findIndex(value => value == ' ');
    }

    return str.join('');
}

export function cutString(str, substr) {
    return str.substring(str.indexOf(substr) + substr.length);
}