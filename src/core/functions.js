export function getFormControlName(string, subStr) {
    let index = string.indexOf(subStr);

    if(index != -1){
        return string.slice(index + subStr.length);
    }else{
        return '';
    }
}